"use client";
import { useId, useRef, useState } from "react";
import { MdClose, MdDownload, MdOpenInNew, MdVisibility } from "react-icons/md";

type ResumeViewerProps = {
  src: string;
  fileName: string;
};

const iconButtonClasses =
  "p-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:text-white hover:border-red-500/50 hover:bg-white/10";

const ResumeViewer = ({ src, fileName }: ResumeViewerProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  // The PDF is only mounted while the dialog is open, so it is never fetched
  // on page load — only when someone actually asks to see it.
  const [isOpen, setIsOpen] = useState(false);
  const [canPreview, setCanPreview] = useState(true);

  const openDialog = () => {
    // Most mobile browsers have no inline PDF viewer and would render a blank box.
    setCanPreview(navigator.pdfViewerEnabled !== false);
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => dialogRef.current?.close();

  const fallback = (
    <div className="flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
      <p className="text-slate-400 max-w-xs">
        Your browser can&apos;t preview PDFs here. Open it in a new tab or
        download it instead.
      </p>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-900 text-white font-bold uppercase tracking-wider flex items-center gap-2"
      >
        Open Resume <MdOpenInNew />
      </a>
    </div>
  );

  return (
    <>
      <div className="flex rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-colors hover:border-red-500/50">
        <button
          type="button"
          onClick={openDialog}
          aria-haspopup="dialog"
          className="group px-6 py-4 text-white font-bold uppercase tracking-wider transition-colors hover:bg-white/10 flex items-center gap-2"
        >
          View Resume{" "}
          <MdVisibility className="group-hover:scale-110 transition-transform" />
        </button>
        {/* Plain <a> rather than next/link: this is a static file, not a route. */}
        <a
          href={src}
          download={fileName}
          aria-label="Download resume"
          title="Download resume"
          className="group px-4 border-l border-white/10 text-white transition-colors hover:bg-white/10 flex items-center"
        >
          <MdDownload
            size={20}
            className="group-hover:translate-y-1 transition-transform"
          />
        </a>
      </div>

      {/* Clicks on the ::backdrop target the <dialog> itself, so it has no
          padding and the inner wrapper fills it — any click that lands on the
          dialog element is a backdrop click. */}
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        // `close` is dispatched asynchronously (on the next frame in Chromium),
        // so read the dialog's real state instead of assuming it is closed.
        onClose={() => setIsOpen(Boolean(dialogRef.current?.open))}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDialog();
        }}
        className="resume-dialog w-[calc(100vw-2rem)] max-w-4xl h-[calc(100dvh-2rem)] max-h-none p-0 rounded-3xl border border-white/10 bg-[#030014] text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-4 md:px-6 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="hidden sm:flex gap-2" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-red-400/50" />
                <div className="w-3 h-3 rounded-full bg-red-300/20" />
              </div>
              <h2
                id={titleId}
                className="font-mono text-xs md:text-sm text-slate-400 truncate"
              >
                {fileName}
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={src}
                download={fileName}
                className="group px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-900 text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
              >
                <span className="hidden sm:inline">Download</span>
                <MdDownload
                  size={18}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume in a new tab"
                title="Open in new tab"
                className={iconButtonClasses}
              >
                <MdOpenInNew size={18} />
              </a>
              <button
                type="button"
                onClick={closeDialog}
                aria-label="Close resume preview"
                className={iconButtonClasses}
              >
                <MdClose size={18} />
              </button>
            </div>
          </div>

          <div className="flex-1 min-h-0 bg-white/5">
            {isOpen &&
              (canPreview ? (
                <object
                  data={`${src}#navpanes=0&view=FitH`}
                  type="application/pdf"
                  aria-label="Resume preview"
                  className="h-full w-full"
                >
                  {fallback}
                </object>
              ) : (
                fallback
              ))}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ResumeViewer;
