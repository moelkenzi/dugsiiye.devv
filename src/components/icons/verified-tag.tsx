type Props = {
  className?: string;
};

const VerifiedTag = (props: Props) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path
      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v6.354h6.234L14.638 40l5.36-3.094L25.358 40l2.972-5.15h6.234v-6.354L40 25.359 36.906 20 40 14.64l-5.432-3.137V5.15h-6.234L25.358 0l-5.36 3.094z"
      fill="currentColor"
      className="text-primary"
    ></path>
    <circle
      cx="20"
      cy="20"
      r="14"
      fill="currentColor"
      className="text-primary"
    ></circle>
    <path
      d="M17.5 24.33l-5.175-5.175-2.35 2.35L17.5 29.03l12.5-12.5-2.35-2.35z"
      fill="white"
    ></path>
  </svg>
);

export default VerifiedTag;

// type Props = {
//   className?: string;
// };

// const DashboardIcon = (props: Props) => (
//   <svg
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={props.className}
//     {...props}
//   >
//     <rect width="7" height="9" x="3" y="3" rx="1" />
//     <rect width="7" height="5" x="14" y="3" rx="1" />
//     <rect width="7" height="9" x="14" y="12" rx="1" />
//     <rect width="7" height="5" x="3" y="16" rx="1" />
//   </svg>
// );

// export default DashboardIcon;
