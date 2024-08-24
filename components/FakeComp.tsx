import React from "react";

const FakeComp = () => {
  return (
    <div className="w-full h-screen overflow-auto p-8">
      <h1 className="text-2xl font-bold mb-4">FakeComp</h1>
      <p className="mb-6 text-lg leading-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        voluptatum consequatur repellendus fugiat praesentium autem cupiditate
        delectus illo totam ut culpa dolorem laudantium nesciunt voluptas labore
        nemo, quisquam tempore deleniti!
      </p>
      <div className="mb-6 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        assumenda quas aliquid quia deserunt expedita facere totam incidunt esse
        omnis id, a molestiae blanditiis minus eum dolores, aperiam error
        voluptatum.
      </div>
      {/* Repeat content to create a scrollable effect */}
      <p className="mb-6 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        expedita veritatis molestias laudantium laboriosam doloribus ullam autem
        recusandae rerum temporibus iusto quam sunt, hic quae distinctio fuga
        placeat, saepe minima!
      </p>
      <p className="mb-6 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        expedita veritatis molestias laudantium laboriosam doloribus ullam autem
        recusandae rerum temporibus iusto quam sunt, hic quae distinctio fuga
        placeat, saepe minima!
      </p>
      <p className="mb-6 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        expedita veritatis molestias laudantium laboriosam doloribus ullam autem
        recusandae rerum temporibus iusto quam sunt, hic quae distinctio fuga
        placeat, saepe minima!
      </p>
      <p className="mb-6 text-lg leading-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        expedita veritatis molestias laudantium laboriosam doloribus ullam autem
        recusandae rerum temporibus iusto quam sunt, hic quae distinctio fuga
        placeat, saepe minima!
      </p>
    </div>
  );
};

export default FakeComp;
