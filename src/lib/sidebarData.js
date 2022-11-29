import { Home, TravelExplore, BarChart } from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from "@mui/icons-material/Add";

export const sidebarData = [
   {
      id: 0,
      text: "Home",
      icon: <Home />,
      link: "/"
   },
   {
      id: 1,
      text: "Aceleraciones",
      icon: <TravelExplore />,
      submenu: true,
      children: [
         {
            link: "/aceleraciones",
            icon: <BarChart />,
            text: 'Tareas de asociación',
         },
         {
            link: "/aceleraciones/logs",
            icon: <AddIcon />,
            text: 'Registro de actividad',
         },
      ],
   },
   {
      id: 2,
      text: "Proyectos",
      link: '/proyectos',
      icon: <SettingsIcon />,
   },
   {
      id: 3,
      icon: <BarChart />,
      text: "Estadísticas",
      link: "/statistics"
   },
]