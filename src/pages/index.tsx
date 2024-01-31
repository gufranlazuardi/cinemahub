import Layout from "@/components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="h-screen w-full">
        <div>
          {/* featured */}

          <div className="flex justify-between">
            <h2 className="border-l-8 border-lime-500 flex items-center pl-2 font-bold">
              Featured
            </h2>

            <div className="w-fit h-8 px-2 pt-1 border rounded-md items-center justify-center bg-green-400">
              <p className="text-sm ">See all</p>
            </div>
          </div>
          <div className="py-5 gap-6 grid grid-cols-6">
            {"123456789101".split("").map((i) => (
              <div className="flex flex-col gap-2" key={i}>
                <img
                  src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
                  alt="no-time-to-die"
                  className="w-auto h-80 border-black rounded-xl"
                />
                <div>
                  <p className="font-bold txt-md">No Time To Die</p>
                  <p className=" text-sm">2020</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-8">
            <h2 className="border-l-8 border-lime-500 flex items-center pl-2 font-bold">
              Top Rated
            </h2>
            <p>See all</p>
          </div>
          <div className="py-5 gap-6 grid grid-cols-8 overflow-x-auto">
            {"12345671".split("").map((i) => (
              <div className="flex flex-col gap-2" key={i}>
                <img
                  src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
                  alt="no-time-to-die"
                  className="w-40 h-auto border-black rounded-xl"
                />
                <div>
                  <p className="font-bold txt-md">No Time To Die</p>
                  <p className=" text-sm">2020</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-8">
            <h2 className="border-l-8 border-lime-500 flex items-center pl-2 font-bold">
              Now Playing
            </h2>
            <p>See all</p>
          </div>
          <div className="py-5 gap-6 grid grid-cols-8 overflow-x-auto">
            {"12345671".split("").map((i) => (
              <div className="flex flex-col gap-2" key={i}>
                <img
                  src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
                  alt="no-time-to-die"
                  className="w-40 h-auto border-black rounded-xl"
                />
                <div>
                  <p className="font-bold txt-md">No Time To Die</p>
                  <p className=" text-sm">2020</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-8">
            <h2 className="border-l-8 border-lime-500 flex items-center pl-2 font-bold">
              Upcoming
            </h2>
            <p>See all</p>
          </div>
          <div className="py-5 gap-6 grid grid-cols-8 overflow-x-auto">
            {"12345671".split("").map((i) => (
              <div className="flex flex-col gap-2" key={i}>
                <img
                  src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
                  alt="no-time-to-die"
                  className="w-40 h-auto border-black rounded-xl"
                />
                <div>
                  <p className="font-bold txt-md">No Time To Die</p>
                  <p className=" text-sm">2020</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
