export default function Lock(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.75a1.5 1.5 0 0 0-1.5 1.5v1.5h3v-1.5A1.5 1.5 0 0 0 8 1.75Zm-3 1.5v1.5H3c-.69 0-1.25.56-1.25 1.25v7c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25h-2v-1.5a3 3 0 0 0-6 0Zm-1.75 3h9.5v6.5h-9.5v-6.5ZM9 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
        fill="#21324B"
      />
    </svg>
  );
}
