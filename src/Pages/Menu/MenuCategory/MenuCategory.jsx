import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, bg, des }) => {
  return (
    <div className="mb-24">
      <div>
      {title && (
        <Cover
          bg={bg}
          title={title}
          des={des}
        />
      )}
      </div>
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link className="flex items-center justify-center" to={`/order/${title}`} ><button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
