export default function BlogNav() {
  return (
    <nav>
      <div>
        <input
          style={{
            borderBottomStyle: "none",
          }}
          type="text"
          id="text"
          className="text-sm md:w-9/12 xs:w-11/12 sm:w-11/12 w-10/12 p-1 outline-none"
          placeholder="Keywords (General, Pricing, Service)"
        />
      </div>
    </nav>
  );
}
