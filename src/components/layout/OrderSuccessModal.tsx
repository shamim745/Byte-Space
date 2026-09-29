"use client";

import { useCart } from "@/context/cart";
import useOverlayDismiss from "@/hooks/useOverlayDismiss";

const OrderSuccessModal = () => {
  const { orderPlaced, lastOrderTotal, dismissOrder } = useCart();

  useOverlayDismiss(dismissOrder, orderPlaced);

  if (!orderPlaced) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close order confirmation"
        onClick={dismissOrder}
        className="absolute inset-0 cursor-default bg-black/50"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-success-title"
        className="relative w-full max-w-[420px] rounded-[24px] border border-[#e5e6e8] bg-white px-8 py-10 text-center shadow-[0_24px_80px_rgba(36,37,40,0.28)]"
      >
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-8 w-8 text-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>

        <h2
          id="order-success-title"
          className="mt-6 font-display text-[26px] font-semibold leading-[31.2px] tracking-[-0.26px] text-ink"
        >
          Order Successful!
        </h2>

        <p className="mt-3 text-[15px] leading-[24px] text-[#4b4c53]">
          Thanks for your purchase — your ${lastOrderTotal} order is confirmed
          and your courses are ready.
        </p>

        <p className="mt-2 text-[13px] leading-[20px] text-[#82868e]">
          This is a demo checkout — no payment was taken.
        </p>

        <button
          type="button"
          onClick={dismissOrder}
          className="mt-7 flex h-[46px] w-full items-center justify-center rounded-[24px] bg-accent text-[18px] font-medium leading-[21.6px] text-ink transition-transform duration-300 hover:-translate-y-0.5"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessModal;
