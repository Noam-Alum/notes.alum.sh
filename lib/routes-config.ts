// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Hoshen",
    href: "/Hoshen",
    noLink: true,
    items: [
      {
        title: "Routing",
        href: "/routing",
        items: [
          {
            title: "BGP",
            href: "/bgp"
          },
          {
            title: "Distance vector VS Link state",
            href: "/distance-vector-vs-link-state"
          },
          {
            title: "EIGRP",
            href: "/eigrp"
          }
        ]
      }
    ]
  }, {
    title: "cPanel",
    href: "/cPanel",
    noLink: true,
    items: [
      {
        title: "Administration Tier 3 | WHM Administration (CWA)",
        href: "/CWA"
      },
      {
        title: "Mail Administration from the command line",
        href: "/mail"
      }
    ]
  }, {
    title: "General",
    href: "/General",
    noLink: true,
    items: [
      {
        title: "BIND",
        href: "/BIND"
      }, {
      	title: "The 48 Laws of Power",
	href: "/48_laws_of_power/index.html"
      }
    ]
  }, {
    title: "JavaScript",
    href: "/JavaScript",
    noLink: true,
    items: [
      {
        title: "Introduction",
        href: "/Introduction"
      }, {
        title: "Data types",
        href: "/Data_types"
      }, {
        title: "Difference between equal operators",
        href: "/Difference_between_equal_operators"
      }
    ]
  }, {
    title: "JetBackup",
    href: "/JetBackup",
    noLink: true,
    items: [
      {
        title: "Bash API",
        href: "/Bash_API"
      }, {
        title: "n8n",
        href: "/n8n",
        items: [
          {
            title: "MongoDB integration",
            href: "/MongoDB_integration"
          }
        ]
      }
    ]
  }, {
    title: "JetServer",
    href: "/JetServer",
    noLink: true,
    items: [
      {
        title: "Duplicate",
        href: "/Duplicate",
        items: [
          {
            title: "Duplicate-cPanel-server-TEMP",
            href: "/duplicate-cPanel-server-TEMP"
          }
        ]
      }
    ]
  }, {
    title: "Linux",
    href: "/Linux",
    noLink: true,
    items: [
      {
        title: "Boot process",
        href: "/Boot_process",
        items: [
          {
            title: "Boot loader Grub",
            href: "/boot_loader_Grub"
          }, {
            title: "Boot process",
            href: "/boot_process"
          }
        ]
      }, {
        title: "Disks",
        href: "/Disks",
        items: [
          {
            title: "Disks partitions swap",
            href: "/disks_partitions_swap"
          }
        ]
      }, {
        title: "General",
        href: "/General",
        items: [
          {
            title: "Hardware_commands",
            href: "/hardware_commands"
          }, {
            title: "Linux directories overview",
            href: "/linux_directories_overview"
          }, {
            title: "Manage shared libraries",
            href: "/Manage_shared_libraries"
          }, {
            title: "New OS",
            href: "/new_os"
          }
        ]
      }, {
        title: "Init systems",
        href: "/Init_systems",
        items: [
          {
            title: "SysV",
            href: "/SysV"
          }
        ]
      }, {
        title: "Package Managers",
        href: "/Package_managers",
        items: [
          {
            title: "DNF features",
            href: "/DNF_features"
          }, {
            title: "How to create a repo",
            href: "/How_to_create_a_repo"
          }, {
            title: "Introduction",
            href: "/introduction"
          }
        ]
      }, {
        title: "SELinux",
        href: "/SELinux",
        items: [
          {
            title: "Introduction",
            href: "/introduction"
          }
        ]
      }, {
        title: "Shell scripting",
        href: "/Shell_scripting",
        items: [
          {
            title: "BASH-scripting",
            href: "/BASH-scripting"
          }, {
            title: "System variables",
            href: "/system_variables"
          }
        ]
      }
    ]
  }
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
