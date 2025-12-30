import { NavLink } from "react-router-dom";

export function Sidebar() {
  const links = [
    { name: "Dashboard", path: "/app/dashboard" },
    { name: "Donate", path: "/app/donate" },
    { name: "Campaigns", path: "/app/campaigns" },
    { name: "My Donations", path: "/app/my-donations" },
    { name: "Settings", path: "/app/settings" },
  ];

  return (
    <aside className="flex-shrink-0 w-20 sm:w-56 md:w-64 bg-green-400/20 backdrop-blur-xl border border-green-400/30 p-4 sm:p-6 flex flex-col space-y-4 transition-all duration-300">
      <h1 className="text-xl sm:text-2xl font-bold text-green-400 mb-4 text-center sm:text-left">
        DonationBoard
      </h1>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `px-2 sm:px-4 py-2 rounded-md text-green-400 hover:bg-green-200 hover:text-green-700 block text-center sm:text-left ${
              isActive ? "bg-green-200 text-green-700 font-bold" : ""
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </aside>
  );
}



//before responsive

// import { NavLink } from "react-router-dom";

// export function Sidebar() {
//   const links = [
//     { name: "Dashboard", path: "/app/dashboard" },
//     { name: "Donate", path: "/app/donate" },
//     { name: "Campaigns", path: "/app/campaigns" },
//     { name: "My Donations", path: "/app/my-donations" },
//     { name: "Settings", path: "/app/settings" },
//   ];

//   return (
//     <aside className="w-64 bg-green-400/20 backdrop-blur-xl border border-green-400/30 p-6 flex flex-col space-y-4">
//       <h1 className="text-2xl font-bold text-green-400 mb-4">DonationBoard</h1>
//       {links.map((link) => (
//         <NavLink
//           key={link.name}
//           to={link.path}
//           className={({ isActive }) =>
//             `px-4 py-2 rounded-md text-green-400 hover:bg-green-200 hover:text-green-700 ${
//               isActive ? "bg-green-200 text-green-700 font-bold" : ""
//             }`
//           }
//         >
//           {link.name}
//         </NavLink>
//       ))}
//     </aside>
//   );
// }
