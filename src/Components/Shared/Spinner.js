const Spinner = () => {
  return (
    <div>
      <div className="text-center">
        <div
          class="spinner-border text-danger mx-auto text-center mt-5"
          role="status"
        >
          <span class="visually-hidden ">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
