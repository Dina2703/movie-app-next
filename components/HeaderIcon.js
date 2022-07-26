import React from "react";

function HeaderIcon({ Icon, title }) {
  return (
    <div className="mx-4  flex flex-col hover:text-white cursor-pointer md:mx-6 active:text-amber-500">
      <Icon
        className="h-6 
      "
      />
      <p className="my-2">{title}</p>
    </div>
  );
}

export default HeaderIcon;
