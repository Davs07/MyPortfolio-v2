function Contact() {
  return (
    <div className="w-full min-h-screen p-2 flex  items-center justify-center flex-col gap-32">
      <h2 className="text-7xl font-bold text-center">Contact</h2>
      <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
        <form className="mt-6">
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 ">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="block w-full px-5 py-3 mt-2 text-gray-700 "
            />
          </div>

          <div className="flex-1 mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Email address
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 "
            />
          </div>

          <div className="w-full mt-6">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Message
            </label>
            <textarea
              className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 "
              placeholder="Message"></textarea>
          </div>

          <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide rounded-xl border-2 border-black">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
