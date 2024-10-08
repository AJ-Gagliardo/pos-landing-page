function ReviewCard({ title, review, user, date, profilePic }) {
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="khaki"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );

  return (
    <div className="border border-slate-200 p-2 flex flex-col h-full flex-grow">
      <div className="flex mb-4">
        {svg}
        {svg}
        {svg}
        {svg}
        {svg}
      </div>
      <p className="text-lg text-left font-bold flex-grow">{title}</p>
      <p className="text-left text-xs flex-grow">{review}</p>
      <div className="flex items-center mt-6 flex-grow">
        <img className="w-8 rounded mr-2" src={profilePic} alt="User Profile" />
        <div className="">
          <p className="text-xs font-normal">{user}</p>
          <p className="text-xs font-light">{date}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
