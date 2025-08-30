export default function Contact() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="grid sm:grid-cols-3 gap-6 my-8">
      <div className="card p-4 flex flex-col items-center text-center">
        <span className="text-brand-600 text-2xl">📧</span>
        <p className="mt-2 font-medium">Email</p>
        <p className="text-slate-500 text-sm">chakradharr542@gmail.com</p>
      </div>
      <div className="card p-4 flex flex-col items-center text-center">
        <span className="text-brand-600 text-2xl">📞</span>
        <p className="mt-2 font-medium">Phone</p>
        <p className="text-slate-500 text-sm">+91-9652189257</p>
      </div>
      <div className="card p-4 flex flex-col items-center text-center">
        <span className="text-brand-600 text-2xl">📍</span>
        <p className="mt-2 font-medium">Address</p>
        <p className="text-slate-500 text-sm">Bangalore, India</p>
      </div>
    </div>

      <h2 className="text-3xl font-bold text-brand-700">Contact Us</h2>
      <p className="text-slate-600">
        Have questions, feedback, or need support? Reach out to us.
      </p>

      <div className="card p-6 space-y-4">
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-slate-500">Name</label>
            <input
              type="text"
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500">Email</label>
            <input
              type="email"
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-slate-500">Message</label>
            <textarea
              rows="4"
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
              placeholder="Type your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-brand-600 text-white px-6 py-2 rounded-xl hover:bg-brand-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}
