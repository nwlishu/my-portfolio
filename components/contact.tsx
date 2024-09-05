import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="mt-12 text-5xl md:text-7xl font-bold leading-tight">
          Contact Me
        </div>
        <div className="flex flex-col md:flex-row justify-evenly w-full mt-4 md:mt-16 px-10 md:px-40">
          <div className="text-left-contact flex flex-col flex-1 basis-2/5	">
            <div>
              <p className="font-bold">Email</p>
              <p className="font-light mt-1.5 md:mt-3.5">
                Supapornnguanprasert@gmail.com
              </p>
            </div>
            <div>
              <p className="font-bold mt-5 md:mt-14">Social Media</p>
              <div className="flex mt-1.5 md:mt-3.5 gap-4">
                {/* skill-icons--instagram */}
                <a href="#">
                  <Image
                    src="/devicon--github.png"
                    className=""
                    width={18}
                    height={18}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src="/logos--linkedin-icon.png"
                    className=""
                    width={18}
                    height={18}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src="/skill-icons--instagram.png"
                    className=""
                    width={18}
                    height={18}
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <Image
                    src="/logos--youtube-icon.png"
                    className=""
                    width={18}
                    height={18}
                    alt="instagram"
                  />
                </a>
                <a>
                  <Image
                    src="/skill-icons--gmail-light.png"
                    className=""
                    width={18}
                    height={18}
                    alt="gmail"
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold mt-5 md:mt-14">Current Location</p>
              <p className="font-light mt-1.5 md:mt-3.5">Taipei, Taiwan</p>
            </div>
          </div>
          <div className="form-right-contact flex-1 basis-3/5">
            <div className="mt-5 md:mt-0">
              <form>
                <div className="flex flex-col">
                  <label className="font-bold">Name</label>
                  <input
                    type="text"
                    className="input-style font-light mt-1.5 md:mt-3.5 file:border-2"
                    required
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col mt-4 md:mt-8">
                  <label className="font-bold">Email</label>
                  <input
                    type="email"
                    className="input-style font-light mt-1.5 md:mt-3.5 border-2 email-input"
                    required
                    placeholder="Email"
                  />
                  <p className="error-message">
                    Please enter a valid e-mail address
                  </p>
                </div>
                <div className="flex flex-col mt-4 md:mt-8">
                  <label className="font-bold">message</label>
                  <textarea
                    className="input-style font-light mt-1.5 md:mt-3.5 border-2"
                    rows={5}
                    placeholder="Message"
                  />
                </div>

                <button className="button-contact mt-4 md:mt-8 py-2 px-9">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
