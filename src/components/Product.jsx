const images = {
  img1: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/cb1b4c20-cea0-4b85-8319-1c3d770577e1/ZM+VAPOR+16+PRO+KM+AG-PRO.png",
  img2: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32ae5185-cbdc-4064-9295-1e6443a5a015/ZM+VAPOR+16+PRO+KM+AG-PRO.png",
  img3: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e9dd4cd9-32b4-477f-b9f6-26ac9cc30dc2/ZM+VAPOR+16+PRO+KM+AG-PRO.png",
  img4: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f92af013-83ce-4065-bf0a-0c59fb4e577a/ZM+VAPOR+16+PRO+KM+AG-PRO.png",
};

function Product() {
  return (
    <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={images.img1}
          alt=""
          className="aspect-square h-full w-full rounded-xl object-cover"
        />
        <div className="flex h-24 flex-row justify-between">
          <img
            src={images.img1}
            alt=""
            className="h-24 w-24 cursor-pointer rounded-md"
          />
          <img
            src={images.img2}
            alt=""
            className="h-24 w-24 cursor-pointer rounded-md"
          />
          <img
            src={images.img3}
            alt=""
            className="h-24 w-24 cursor-pointer rounded-md"
          />
          <img
            src={images.img4}
            alt=""
            className="h-24 w-24 cursor-pointer rounded-md"
          />
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className="font-semibold text-violet-600">Special Sneaker</span>
          <h1 className="text-3xl font-bold">Nike invincible</h1>
        </div>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          atque id deleniti harum provident et excepturi reprehenderit nam
          fugiat voluptatem veritatis quisquam facilis deserunt odit fugit totam
          animi repellendus ea perferendis aliquam quos nobis, veniam
          necessitatibus! Tempora nemo voluptatem nihil assumenda delectus dolor
          et iure cupiditate maxime, velit minus mollitia.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button className="rounded-lg bg-gray-200 px-4 py-2">-</button>
            <span className="rounded-lg px-6 py-4">1</span>
            <button className="rounded-lg bg-gray-200 px-4 py-2">+</button>
          </div>
          <button className="h-full rounded-xl bg-violet-800 px-16 py-3 font-semibold text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
