import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Category from "../Category/Category";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-20">
      <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="btn rounded-xl border-b-4 btn-outline">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
