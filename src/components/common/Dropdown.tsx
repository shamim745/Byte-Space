"use client";

import type { DropdownProps } from "@/types/common";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

export const DEFAULT_PILL =
  "flex h-12 items-center gap-1 rounded-[24px] border border-[#ced0d3] bg-white px-4 py-3 text-base font-medium leading-[19.2px] text-[#4b4c53] transition-colors hover:border-[#4b4c53]";

const MENU_BASE =
  "z-40 w-max rounded-2xl border border-[#e5e6e8] bg-white p-2 shadow-[0_12px_40px_rgba(36,37,40,0.16)] overflow-y-auto overscroll-contain";

const ITEM =
  "flex w-full items-center justify-between gap-6 rounded-xl px-3 py-2 text-left text-[15px] leading-[22.5px] transition-colors";

type MenuPos = { top: number; left: number; maxH: number };

const Dropdown = ({
  label,
  items,
  value,
  defaultValue,
  onChange,
  icon,
  trailingIcon,
  pillClassName = DEFAULT_PILL,
  align = "left",
  portal = false,
  ariaLabel,
  open: openProp,
  onOpenChange,
}: DropdownProps) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [pos, setPos] = useState<MenuPos | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const open = openProp ?? internalOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      if (openProp === undefined) setInternalOpen(value);
      onOpenChange?.(value);
    },
    [openProp, onOpenChange],
  );

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !rootRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    let cleanupScroll: (() => void) | undefined;
    if (portal) {
      const onScroll = (event: Event) => {
        // ignore scrolling inside the menu itself (long lists)
        if (
          menuRef.current &&
          event.target instanceof Node &&
          menuRef.current.contains(event.target)
        ) {
          return;
        }
        setOpen(false);
      };
      // capture catches scrolls from any ancestor container
      window.addEventListener("scroll", onScroll, { capture: true });
      window.addEventListener("resize", onScroll);
      cleanupScroll = () => {
        window.removeEventListener("scroll", onScroll, { capture: true });
        window.removeEventListener("resize", onScroll);
      };
    }

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      cleanupScroll?.();
    };
  }, [open, portal, setOpen]);

  // keep the portal menu inside the viewport horizontally
  useLayoutEffect(() => {
    if (!open || !portal || !menuRef.current || !rootRef.current) return;
    const menu = menuRef.current;
    const rect = menu.getBoundingClientRect();
    let left = rootRef.current.getBoundingClientRect().left;
    if (left + rect.width > window.innerWidth - 8) {
      left = Math.max(8, window.innerWidth - rect.width - 8);
    }
    menu.style.left = `${left}px`;
  }, [open, portal]);

  const handleToggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    if (portal && rootRef.current) {
      const rect = rootRef.current.getBoundingClientRect();
      const top = rect.bottom + 8;
      const maxH = Math.max(140, Math.min(280, window.innerHeight - top - 16));
      setPos({ top, left: rect.left, maxH });
    }
    setOpen(true);
  };

  const activeItem = items.find((item) => item.value === value);
  const text = value === defaultValue ? label : (activeItem?.label ?? label);

  const menu = open ? (
    <ul
      ref={menuRef}
      role="listbox"
      aria-label={ariaLabel ?? label}
      className={
        portal && pos
          ? `${MENU_BASE} fixed max-w-[calc(100vw-16px)]`
          : `${MENU_BASE} absolute min-w-full top-full mt-2 max-h-[280px] ${
              align === "right" ? "right-0" : "left-0"
            }`
      }
      style={
        portal && pos
          ? { top: pos.top, left: pos.left, maxHeight: pos.maxH, zIndex: 80 }
          : undefined
      }
    >
      {items.map((item) => {
        const isActive = item.value === value;
        return (
          <li key={item.value} role="option" aria-selected={isActive}>
            <button
              type="button"
              onClick={() => {
                onChange(item.value);
                close();
              }}
              className={`${ITEM} ${
                isActive
                  ? "bg-[#f5f5f6] font-medium text-[#003be2]"
                  : "text-ink hover:bg-[#f5f5f6]"
              }`}
            >
              <span className="flex min-w-0 flex-col">
                <span className="truncate">{item.label}</span>
                {item.hint && (
                  <span className="truncate text-[13px] leading-[18px] text-[#82868e]">
                    {item.hint}
                  </span>
                )}
              </span>
              {isActive && <span aria-hidden>✓</span>}
            </button>
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={handleToggle}
        className={pillClassName}
      >
        {icon}
        <span className="max-w-[220px] truncate">{text}</span>
        {trailingIcon}
      </button>

      {menu && (portal && pos ? createPortal(menu, document.body) : menu)}
    </div>
  );
};

export default Dropdown;
