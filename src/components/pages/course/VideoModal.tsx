"use client";

import { CloseIcon } from "@/components/common/Icons";
import useOverlayDismiss from "@/hooks/useOverlayDismiss";

const VIDEO_ID = "PkZNo7MFNFg";

type VideoModalProps = {
  onClose: () => void;
};

const VideoModal = ({ onClose }: VideoModalProps) => {
  useOverlayDismiss(onClose);

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/70"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Course preview video"
        className="relative w-full max-w-[960px]"
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-md transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="aspect-video w-full overflow-hidden rounded-[16px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            title="JavaScript course preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
