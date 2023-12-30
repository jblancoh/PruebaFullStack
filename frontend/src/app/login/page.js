import FormLogin from "@/components/FormLogin";
import NavBar from "@/components/NavBar";

const Page = () => {

  return (
    <div className="container">
      <NavBar />
      <div className="hero min-h-screen bg-base-300 ">
        <div className="text-center hero-content flex-col">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

export default Page;