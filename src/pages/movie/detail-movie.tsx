import Layout from "@/components/Layout";

const DetailMovie = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <img
          src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
          alt="no-time-to-die"
          className=" w-full h-96"
        />

        <div className="flex gap-7">
          <div className="flex">
            <img
              src="https://pbs.twimg.com/media/ESIJQ9IXYAIssnE?format=jpg&name=large"
              alt="no-time-to-die"
              className=" w-36 h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold">No Time to Die (2021)</p>
            <p className=" text-md">
              The mission that changes everything begins…
            </p>
            <div>
              <p>29 Sep 2021</p>
              <p>163 Min</p>
            </div>
            <p className=" text-7xl">9.4</p>
            <div className="flex gap-2">
              <p className="w-fit h-fit border rounded-xl px-2">Action</p>
              <p className="w-fit h-fit border rounded-xl px-2">Adventure</p>
              <p className="w-fit h-fit border rounded-xl px-2">Thriller</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailMovie;
