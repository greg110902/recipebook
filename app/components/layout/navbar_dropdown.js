export default function NavBarDropdown({ title, children }) {
  return (
    <details className="dropdown">
      <summary className="btn m-1">{title}</summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        {children.map((child) => {
          return (
            <li>
              <a href={child.route}>{child.name}</a>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
