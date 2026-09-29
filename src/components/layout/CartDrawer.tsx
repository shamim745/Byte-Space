"use client";

import { CloseIcon } from "@/components/common/Icons";
import { useCart } from "@/context/cart";
import useOverlayDismiss from "@/hooks/useOverlayDismiss";
import Image from "next/image";
import Link from "next/link";

const CartDrawer = () => {
  const { isOpen } = useCart();

  if (!isOpen) return null;

  return <CartDrawerPanel />;
};

const CartDrawerPanel = () => {
  const { items, subtotal, close, removeItem, placeOrder } = useCart();

  useOverlayDismiss(close);

  return (
    <>
      <button
        type="button"
        aria-label="Close cart"
        onClick={close}
        className="fixed inset-0 z-[60] cursor-default bg-black/40"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[420px] flex-col bg-white shadow-[-12px_0_40px_rgba(36,37,40,0.18)]"
      >
        <div className="flex items-center justify-between border-b border-[#e5e6e8] px-6 py-5">
          <p className="font-display text-xl font-semibold leading-6 text-ink">
            Your Cart {items.length > 0 && `(${items.length})`}
          </p>
          <button
            type="button"
            aria-label="Close cart"
            onClick={close}
            className="transition-opacity hover:opacity-70"
          >
            <CloseIcon className="h-6 w-6 text-ink" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="text-[15px] leading-[24px] text-[#4b4c53]">
                Your cart is empty.
              </p>
              <Link
                href="/courses"
                onClick={close}
                className="rounded-[24px] border border-[#ced0d3] px-5 py-2.5 text-[15px] font-medium text-[#4b4c53] transition-colors hover:border-[#4b4c53]"
              >
                Browse courses
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-4" role="list">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-[16px] border border-[#e5e6e8] p-3"
                >
                  <Image
                    src={item.image}
                    alt=""
                    width={88}
                    height={56}
                    unoptimized
                    className="h-14 w-[88px] shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium leading-[22.5px] text-ink">
                      {item.title}
                    </p>
                    {item.author && (
                      <p className="truncate text-[13px] leading-[20px] text-[#82868e]">
                        by {item.author}
                      </p>
                    )}
                    <p className="mt-0.5 font-display text-[15px] font-semibold leading-[22.5px] text-[#003be2]">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${item.title} from cart`}
                    onClick={() => removeItem(item.id)}
                    className="shrink-0 transition-opacity hover:opacity-60"
                  >
                    <CloseIcon className="h-5 w-5 text-[#82868e]" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#e5e6e8] px-6 py-5">
            <div className="flex items-baseline justify-between">
              <span className="text-[16px] leading-[25.6px] text-[#4b4c53]">
                Subtotal
              </span>
              <span className="font-display text-[22px] font-semibold leading-[26.4px] text-[#003be2]">
                ${subtotal}
              </span>
            </div>
            <button
              type="button"
              onClick={placeOrder}
              className="mt-4 flex h-[46px] w-full items-center justify-center rounded-[24px] bg-accent text-[18px] font-medium leading-[21.6px] text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
