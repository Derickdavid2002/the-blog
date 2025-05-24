import React from "react";

const blogData = [
  {
    author: "Alec Whitten",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    text: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/Image.png",
    buttonTexts: [
      {
        text: "Leadership",
        color: "#000",
      },
      { text: "Management", color: "#6941C6" },
    ],
  },
  {
    author: "Derick Whitten",
    date: "1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    text: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "/Image7.png",
    buttonTexts: [
      {
        text: "Leadership",
        color: "#C11574",
      },
      { text: "Management", color: "#6941C6" },
    ],
  },
];

function Hero() {
  return (
    <div className="max-w-[1400px] mx-auto ">
      <div className="flex px-10 gap-4 mt-5">
        <ol>© 2023</ol>
        <ol>Twitter</ol>
        <ol>LinkedIn</ol>
        <ol>Email</ol>
        <ol>RSS feed</ol>
        <ol>Add to Feedly</ol>
      </div>
      <p className="px-10 mt-7 font-bold">Recent blog posts</p>

      <section className="px-10">
        <div className="flex gap-5 mt-4 ">
          <div>
            <img src="/Image.png" alt="" className="w-[592px] h-[228px] mb-4" />
            <p className="text-[#6941C6] mb-2">Olivia Rhye • 1 Jan 2023</p>
            <p className="text-[#1A1A1A] mb-2 font-bold">
              UX review presentations
            </p>
            <p>
              How do you create compelling presentations that wow your
              colleagues and <br />
              impress your managers?
            </p>
            <div className=" flex mt-2 gap-3">
              <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Design
              </button>
              <button className="text-[#3538CD] bg-[#3538CD]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Research
              </button>
              <button className="text-[#C11574] bg-[#C11574]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Presentation
              </button>
            </div>
          </div>
          <div className="">
            <div className="flex gap-4">
              <img src="/Image1.png" alt="" className="w-[320px] h-[200px]" />
              <div>
                <p className="text-[#6941C6] mb-2">
                  Phoenix Baker • 1 Jan 2023
                </p>
                <p className="text-[#1A1A1A] mb-2 font-bold">
                  Migrating to Linear 101
                </p>
                <p>
                  Linear helps streamline software <br />
                  projects, sprints, tasks, and bug <br />
                  tracking. Here’s how to get...
                </p>
                <div className="flex gap-3">
                  <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                    Design
                  </button>
                  <button className="text-[#C11574] bg-[#C11574]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                    Research
                  </button>
                </div>
              </div>
            </div>

            <div className="flex mt-5 gap-4">
              <img src="/Image2.png" alt="" className="w-[320px] h-[200px]" />
              <div>
                <p className="text-[#6941C6] mb-2">Lana Steiner • 1 Jan 2023</p>
                <p className="text-[#1A1A1A] mb-2 font-bold">
                  Building your API Stack
                </p>
                <p>
                  The rise of RESTful APIs has <br /> been met by a rise in
                  tools for <br />
                  creating, testing, and manag...
                </p>
                <div className=" flex gap-3">
                  <button className="text-[#027A48] bg-[#027A48]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                    Design
                  </button>
                  <button className="text-[#C11574] bg-[#C11574]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                    Research
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10">
        <div className="flex gap-5 mt-13 ">
          <div>
            <img src="/Image3.png" alt="" className="w-[592px] h-[246px]" />
          </div>
          <div>
            <p className="text-[#6941C6] mb-2">Olivia Rhye • 1 Jan 2023</p>
            <p className="text-[#1A1A1A] mb-2 font-bold">
              Grid system for better Design User Interface
            </p>
            <p>
              A grid system is a design tool used to arrange content on a
              webpage. It is a <br />
              series of vertical and horizontal lines that create a matrix of
              intersecting <br /> points, which can be used to align and
              organize page elements. Grid systems <br /> are used to create a
              consistent look and feel across a website, and can help <br />
              to make the layout more visually appealing and easier to navigate.
            </p>
            <div className=" flex gap-3">
              <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                Design
              </button>
              <button className="text-[#C11574] bg-[#C11574]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                Research
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 mt-7">
        <p>All blogs post</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
      </section>

      {/* <section className="px-10 mt-7">
        <p>All blogs post</p>
        <div className="flex mt-4 gap-5">
          <div>
            <img src="/Image4.png" alt="" className="w-[384px] h-[240px]" />
            <p className="text-[#6941C6] mt-3 ">Alec Whitten • 1 Jan 2023</p>
            <p className="font-bold mt-3">Bill Walsh leadership lessons</p>
            <p className="mt-2">
              Like to know the secrets of transforming a 2-14 <br />
              team into a 3x Super Bowl winning Dynasty?
            </p>
            <div className=" flex gap-3">
              <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                Leadership
              </button>
              <button className="text-[#363F72] bg-[#363F72]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                Management
              </button>
            </div>
          </div>
          <div>
            <img src="/Image5.png" alt="" className="w-[384px] h-[240px]" />
            <p className="text-[#6941C6] mt-3 "> Demi WIlkinson • 1 Jan 2023</p>
            <p className="font-bold mt-2">PM mental models</p>
            <p className="mt-2">
              Mental models are simple expressions of complex <br />
              processes or relationships.
            </p>
            <div className=" flex mt-2 gap-3">
              <button className="text-[#026AA2] bg-[#026AA2]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Product
              </button>
              <button className="text-[#3538CD] bg-[#3538CD]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Research
              </button>
              <button className="text-[#C4320A] bg-[#C4320A]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Framework
              </button>
            </div>
          </div>
          <div>
            <img src="/Image6.png" alt="" className="w-[384px] h-[240px]" />
            <p className="text-[#6941C6] mt-3 ">Candice Wu • 1 Jan 2023</p>
            <p className="font-bold mt-3">What is Wireframing?</p>
            <p className="mt-2">
              Introduction to Wireframing and its Principles. <br /> Learn from
              the best in the industry.
            </p>
            <div className=" flex mt-1 gap-3">
              <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                Design
              </button>
              <button className="text-[#3538CD] bg-[#3538CD]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                Research
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="px-10 mt-9">
        <div className="flex mt-4 gap-5">
          <div>
            <img src="/Image7.png" alt="" className="w-[384px] h-[240px]" />
            <p className="text-[#6941C6] mt-3 ">Natali Craig • 1 Jan 2023</p>
            <p className="font-bold mt-3">
              How collaboration makes us <br />
              better designers
            </p>
            <p className="mt-2">
              Collaboration can make our teams stronger, and <br /> our
              individual designs better.
            </p>
            <div className=" flex gap-3">
              <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                Design
              </button>
              <button className="text-[#363F72] bg-[#363F72]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                Research
              </button>
            </div>
          </div>
          <div>
            <img src="/Image8.png" alt="" className="w-[384px] h-[240px]" />
            <p className="text-[#6941C6] mt-3 "> Drew Cano • 1 Jan 2023</p>
            <p className="font-bold mt-2">
              Our top 10 Javascript <br /> frameworks to use
            </p>
            <p className="mt-2">
              JavaScript frameworks make development easy <br />
              with extensive features and functionalities.
            </p>
            <div className=" flex mt-2 gap-3">
              <button className="text-[#027A48] bg-[#027A48]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Software Development
              </button>
              <button className="text-[#C11574] bg-[#C11574]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                Tools
              </button>
              <button className="text-[#C01048] bg-[#C01048]/20 text-[14px] mt-4 rounded-full px-3 py-2">
                SaaS
              </button>
            </div>
          </div>
          <div>
            <img src="/Image9.png" alt="" className="w-[384px] h-[240px]" />
            <p className="text-[#6941C6] mt-3 ">Orlando Diggs • 1 Jan 2023</p>
            <p className="font-bold mt-3">
              Podcast: Creating a better <br /> CX Community
            </p>
            <p className="mt-2">
              Starting a community doesn’t need to be <br /> complicated, but
              how do you get started?
            </p>
            <div className=" flex mt-1 gap-3">
              <button className="text-[#6941C6] bg-[#6941C6]/20 text-[14px] rounded-full mt-4 px-3 py-2">
                Podcast
              </button>
              <button className="text-[#3538CD] bg-[#3538CD]/20 text-[13px] mt-4 rounded-full px-2 py-1">
                Customer Success
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
export default Hero;
