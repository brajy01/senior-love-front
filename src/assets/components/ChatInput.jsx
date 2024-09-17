import { useState, useEffect } from "react";

export default function ChatInput() {
  const [textarea, setTextarea] = useState("");
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <>
      <div
        className={`w-full fixed bottom-0 ${
          isFooterVisible ? "mb-[52px]" : ""
        }`}
      >
        <form>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center py-2 bg-gray-100">
            <textarea
              id="chat"
              rows="1"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tapez votre message ici..."
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100"
            >
              <span className="btn-sm rounded-full text-white bg-fuchsia-400">
                Envoyer
              </span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
