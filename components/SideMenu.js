import { RiTrophyLine } from 'react-icons/ri';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiChevronDown } from 'react-icons/hi';
import Link from 'next/link';

const SideMenu = ({ categories, open, width }) => {
  let filteredObject = categories.filter(
    (v, i, a) =>
      a.findIndex((v2) => v2.categories.title === v.categories.title) !== i
  );

  return (
    <div className="">
      <nav className="flex flex-col items-end mt-6 space-y-1 ">
        <div className="mr-5">
          <Link href={'/'}>
            {open ? (
              width > 767 ? (
                <div className="h-24 w-72">
                  <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    y={0}
                    viewBox="0 0 1026.38 196.09"
                    style={{
                      enableBackground: 'new 0 0 1026.38 196.09',
                    }}
                    xmlSpace="preserve"
                  >
                    <style>{'.st2{fill:#fff}'}</style>
                    <path
                      className="st2"
                      d="M918.82 153.95c1.03-1.17.72-3.21.66-4.65-.05-1.3-.08-2.61-.08-3.92v-17.02c0-13.2.03-26.4.01-39.61 0-7.13.7-14.76-.22-21.83-1.28-9.78-9.84-17.32-17.6-22.45-6.02-3.99-12.72-6.86-19.59-9.04-3.39-1.07-6.82-1.96-10.28-2.77-3.23-.76-6.59-2-9.95-1.32-5.94 1.2-5.7 9.84-5.5 14.42.95 22.11.3 44.28.3 66.41 0 2.48-.05 4.96-.05 7.44 0 2.37-.05 4.65 1.76 6.45 1.96 1.96 4.56 2.34 7.18 2.64 9.7 1.1 19.08 4.45 27.6 9.17 4.34 2.4 8.47 5.17 12.35 8.27 1.97 1.57 3.8 3.3 5.73 4.92 1.67 1.4 4.41 4.68 6.92 3.48.31-.17.56-.36.76-.59zM926.01 153.95c-1.03-1.17-.72-3.21-.66-4.65.05-1.3.08-2.61.08-3.92v-17.02c0-13.2-.03-26.4-.01-39.61 0-7.13-.7-14.76.22-21.83 1.28-9.78 9.84-17.32 17.6-22.45 6.02-3.99 12.72-6.86 19.59-9.04 3.39-1.07 6.82-1.96 10.28-2.77 3.23-.76 6.59-2 9.95-1.32 5.94 1.2 5.7 9.84 5.5 14.42-.95 22.11-.3 44.28-.3 66.41 0 2.48.05 4.96.05 7.44 0 2.37.05 4.65-1.76 6.45-1.96 1.96-4.56 2.34-7.18 2.64-9.7 1.1-19.08 4.45-27.6 9.17-4.34 2.4-8.47 5.17-12.35 8.27-1.97 1.57-3.8 3.3-5.73 4.92-1.67 1.4-4.41 4.68-6.92 3.48-.31-.17-.56-.36-.76-.59z"
                    />
                    <linearGradient
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1={908.032}
                      y1={116.168}
                      x2={837.237}
                      y2={116.168}
                    >
                      <stop
                        offset={0}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0,
                        }}
                      />
                      <stop
                        offset={1}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0.5,
                        }}
                      />
                    </linearGradient>
                    <path
                      d="M837.28 69.44c-.37 2.35.03 5.06.03 7.34v18.64c0 17.57-.21 35.15-.24 52.72v1.06c0 1.33 0 2.68.31 3.98.56 2.34 2.29 4.13 4.75 4.35 2.11.18 4.27-.34 6.35-.63 3.33 0 6.69-.99 10.05-1.08 3.53-.1 7.06.08 10.56.49 7 .82 13.89 2.58 20.48 5.1 2 .76 3.97 1.63 5.85 2.66 3.45 1.9 9.91 8.18 12.15 1.39.81-2.44.46-5.18.53-7.7.09-3.23.12-6.45.14-9.68.06-10.59-.11-21.17-.34-31.76-.15-6.89.04-13.84-.29-20.71-.19-4.02-1.62-7.27-4.76-9.82a98.036 98.036 0 0 0-40.49-19.69c-2.23-.5-4.49-.92-6.75-1.26-.98-.15-1.96-.28-2.95-.4-4.48-.53-12.84-2.18-14.95 3.39-.21.5-.34 1.04-.43 1.61z"
                      style={{
                        fill: 'url(#SVGID_1_)',
                      }}
                    />
                    <linearGradient
                      id="SVGID_00000000212834467657313510000004830302837719568568_"
                      gradientUnits="userSpaceOnUse"
                      x1={931.094}
                      y1={116.168}
                      x2={1002.277}
                      y2={116.168}
                    >
                      <stop
                        offset={0}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0,
                        }}
                      />
                      <stop
                        offset={1}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0.5,
                        }}
                      />
                    </linearGradient>
                    <path
                      style={{
                        fill: 'url(#SVGID_00000000212834467657313510000004830302837719568568_)',
                      }}
                      d="M1002.06 69.44c.37 2.35-.03 5.06-.03 7.34v18.64c0 17.57.21 35.15.24 52.72v1.06c0 1.33 0 2.68-.31 3.98-.56 2.34-2.29 4.13-4.75 4.35-2.11.18-4.27-.34-6.35-.63-3.33 0-6.69-.99-10.05-1.08-3.53-.1-7.06.08-10.56.49-7 .82-13.89 2.58-20.48 5.1-2 .76-3.97 1.63-5.85 2.66-3.45 1.9-9.91 8.18-12.15 1.39-.81-2.44-.46-5.18-.53-7.7-.09-3.23-.12-6.45-.14-9.68-.06-10.59.11-21.17.34-31.76.15-6.89-.04-13.84.29-20.71.19-4.02 1.62-7.27 4.76-9.82a98.036 98.036 0 0 1 40.49-19.69c2.23-.5 4.49-.92 6.75-1.26.98-.15 1.96-.28 2.95-.4 4.48-.53 12.84-2.18 14.95 3.39.2.5.34 1.04.43 1.61z"
                    />
                    <path
                      className="st2"
                      d="M91.36 81.74c1.91 0 3.56-.68 4.96-2.05 1.4-1.36 2.1-3.02 2.1-4.96 0-1.88-.68-3.51-2.05-4.91-1.36-1.4-3.04-2.1-5.01-2.1-1.84 0-3.47.68-4.89 2.05-1.42 1.36-2.12 3.02-2.12 4.96s.68 3.6 2.05 4.96c1.36 1.37 3.02 2.05 4.96 2.05zM126.81 136.17c-1.77 0-3.24.67-4.4 2-1.26 1.26-1.89 2.8-1.89 4.6 0 1.64.62 3.08 1.87 4.32 1.24 1.24 2.72 1.87 4.42 1.87 1.67 0 3.15-.61 4.43-1.82 1.28-1.21 1.92-2.67 1.92-4.37 0-1.71-.62-3.23-1.87-4.58-1.25-1.34-2.74-2.02-4.48-2.02zM111.67 136.17c-1.71 0-3.2.63-4.48 1.89-1.28 1.26-1.92 2.83-1.92 4.71 0 1.71.67 3.15 2 4.35 1.23 1.23 2.69 1.84 4.4 1.84 1.7 0 3.19-.62 4.45-1.87 1.26-1.25 1.89-2.69 1.89-4.32 0-1.67-.63-3.21-1.89-4.6-1.4-1.33-2.88-2-4.45-2zM118.06 94.33c.14 2.32.2 3.82.2 4.5l.26 6.34c0 3.1-.84 4.91-2.51 5.42-1.59.49-6 .74-13.23.77-2.6-.01-3.9-1.34-3.9-3.99V88.96H83.33v18.62c0 2.52-1.36 3.79-4.09 3.79H57.39l-7.93 17.09h13.51c-.44 2.83-1.72 5.18-3.84 7.06-2.11 1.88-4.48 2.81-7.11 2.81-3.31 0-6.16-1.17-8.54-3.5-2.39-2.34-3.58-5.19-3.58-8.57 0-1.84.57-4.07 1.71-6.7 1.14-2.63 2.91-5.76 5.29-9.41l-13.25-8.24c-6.41 10.06-9.62 18.59-9.62 25.58 0 7.84 2.67 14.39 8.01 19.64s11.86 7.88 19.57 7.88c7.5 0 13.21-1.92 17.11-5.75 3.9-3.84 6.58-7.35 8.03-10.54 1.45-3.19 2.17-6.61 2.17-10.26h2.56v-.04c3.93-.19 7.16-1.46 9.67-3.85 1.36 1.26 3.02 2.23 4.96 2.89 1.66.57 3.54.88 5.63.96v.04h13.04c5.29 0 9.7-1.57 13.25-4.71 3.55-3.14 5.32-7.42 5.32-12.84V88.96h-15.5c.01 1.26.08 3.05.21 5.37zM240.28 89.32l-31.46-21.69-9.41 13.35 5.42 3.53c-5.76 0-10.75 2.11-14.96 6.32-4.21 4.21-6.32 9.17-6.32 14.86 0 1.13.05 2.09.15 2.89.1.8.32 1.73.67 2.79h-3.12c-3.31 0-5.49-1.13-6.55-3.38l-12.94-25.53-14.02 6.85 4.81 9.57c2.49 5.25 3.73 8.51 3.73 9.77 0 2.01-2.78 3.02-8.34 3.02l-4.35-.1-2.51-.2v17.09h13.25c4.67 0 8.46-1.3 11.36-3.89 1.47 1.26 3.13 2.23 4.99 2.89 1.86.67 3.84 1 5.96 1H228.76c5.73 0 10.71-2.08 14.94-6.24 4.23-4.16 6.34-9.21 6.34-15.14.01-7.28-3.25-13.19-9.76-17.76zm-30.6 19.95c-.89.85-1.69 1.42-2.4 1.69-.72.27-1.57.41-2.56.41-1.71 0-3.16-.62-4.37-1.87-1.21-1.24-1.82-2.69-1.82-4.32 0-1.71.6-3.17 1.79-4.4 1.13-1.26 2.59-1.89 4.4-1.89 1.7 0 3.18.61 4.43 1.82 1.24 1.21 1.87 2.7 1.87 4.48-.01 1.86-.45 3.22-1.34 4.08zm23.13.74c-.85.9-1.84 1.36-2.97 1.36h-5.32c.44-1.84.67-3.68.67-5.52 0-2.59-.43-5.25-1.28-7.98l8.8 6.19c.78.58 1.24 1.64 1.38 3.17 0 .95-.43 1.88-1.28 2.78zM313.22 135.66c-1.88 0-3.52.7-4.94 2.1-1.42 1.4-2.12 3.07-2.12 5.01 0 1.81.73 3.41 2.2 4.81 1.47 1.4 3.09 2.1 4.86 2.1 1.94 0 3.6-.7 4.96-2.1 1.36-1.4 2.05-3 2.05-4.81 0-1.94-.68-3.62-2.05-5.01-1.36-1.4-3.01-2.1-4.96-2.1zM308.08 94.46c.12 2.4.18 3.93.18 4.58l.31 6.34c0 2.97-.58 4.63-1.74 4.99-1.15.36-2.73.67-4.72.94-2.27-.22-3.42-1.1-3.42-2.65 0-6.99-1.65-12.73-4.94-17.21-3.29-4.48-8.31-6.73-15.07-6.73-5.59 0-10.35 1.96-14.27 5.88s-5.88 8.68-5.88 14.27v23.58h15.81v-22.87c0-1.13.48-2.11 1.43-2.97.82-.92 1.81-1.38 2.97-1.38 2.25 0 3.68 2.34 4.3 7.01.58 6.31 2 11.25 4.25 14.83 2.13 3.4 7.05 5.18 14.73 5.35v.02h2.81c5.25 0 9.66-1.57 13.22-4.71 3.56-3.14 5.35-7.42 5.35-12.84V88.96h-15.5c0 1.26.06 3.09.18 5.5zM397.27 82c1.91 0 3.56-.68 4.96-2.05 1.4-1.36 2.1-3.02 2.1-4.96 0-1.84-.7-3.47-2.1-4.89-1.4-1.42-3.05-2.12-4.96-2.12-1.91 0-3.58.71-5.01 2.12-1.43 1.42-2.15 3.04-2.15 4.89 0 1.94.7 3.63 2.1 5.06 1.46 1.3 3.15 1.95 5.06 1.95z"
                    />
                    <path
                      className="st2"
                      d="M391.67 94.46c.12 2.4.18 3.93.18 4.58l.31 6.34c0 2.97-.58 4.63-1.74 4.99-1.15.35-2.72.67-4.71.94-2.08-.26-3.12-1.44-3.12-3.52v-42.2h-15.4v45.32c0 5.63 1.82 9.96 5.45 12.99 3.4 2.84 7.73 4.33 12.97 4.52v.04h2.81c5.25 0 9.66-1.57 13.22-4.71 3.56-3.14 5.35-7.42 5.35-12.84V88.96h-15.5c0 1.26.06 3.09.18 5.5zM450.12 78.93c1.88 0 3.51-.7 4.91-2.1 1.4-1.4 2.1-3.04 2.1-4.91 0-1.98-.67-3.67-2.02-5.09s-3.01-2.12-4.99-2.12c-1.84 0-3.48.72-4.91 2.15-1.43 1.43-2.15 3.12-2.15 5.06 0 1.88.72 3.51 2.15 4.91 1.43 1.4 3.07 2.1 4.91 2.1z"
                    />
                    <path
                      className="st2"
                      d="m522.91 60.31-34.48 10.33-2.81 15.55 9.92 8.54c4.54 4.23 6.8 7.67 6.8 10.33 0 4.4-3.44 6.6-10.33 6.6l-4.5-.1-2.4-.13v-.07c-3.99 0-7.74-2.1-11.25-6.29l-8.44-11.82c-3.82-4.23-8.32-6.34-13.51-6.34-3.99 0-8.15 1.19-12.48 3.58l5.83 13.56c1.81-1.06 3.43-1.59 4.86-1.59 1.67 0 3.46 1.14 5.37 3.43l3.79 5.47h-22.25c-2.73 0-4.09-1.19-4.09-3.58v-42.2h-15.4v45.32c0 5.63 1.82 9.96 5.45 12.99 3.31 2.77 7.5 4.26 12.56 4.5v.05h61.18c6.07 0 11.27-2.19 15.6-6.57 4.33-4.38 6.5-9.59 6.5-15.63 0-4.54-1.03-8.31-3.09-11.33-2.06-3.02-3.97-5.52-5.73-7.52-1.76-2-3.73-4.03-5.91-6.11l23.12-6.7-4.31-14.27zM552.02 85.38c-5.9 0-10.97 2.11-15.22 6.34s-6.37 9.31-6.37 15.24c0 6.04 2.17 11.12 6.5 15.24 4.33 4.13 9.53 6.19 15.6 6.19-.92 1.43-8.68 6.56-23.28 15.4l8.34 13.25 17.09-10.33c6.07-3.99 10.76-8.42 14.07-13.3 3.31-4.88 4.96-10.91 4.96-18.11 0-7.95-1.74-14.92-5.22-20.92-3.48-6-8.97-9-16.47-9zm5.93 26.5h-6.65c-1.71 0-3.16-.63-4.37-1.89-1.21-1.26-1.82-2.69-1.82-4.3 0-1.57.61-2.97 1.84-4.22 1.23-1.24 2.68-1.87 4.35-1.87 2.18 0 3.96 1.13 5.32 3.38.58 1.06 1.01 2.09 1.28 3.09.27 1.01.41 2.12.41 3.35 0 .65-.12 1.47-.36 2.46zM636.22 80.47c1.6 0 3.06-.63 4.37-1.89 1.31-1.26 1.97-2.71 1.97-4.35 0-1.67-.61-3.19-1.84-4.55-1.36-1.26-2.86-1.89-4.5-1.89-1.71 0-3.17.68-4.4 2.05-1.26 1.23-1.89 2.69-1.89 4.4 0 1.71.63 3.17 1.89 4.4 1.26 1.21 2.73 1.83 4.4 1.83zM652.34 80.62c1.71 0 3.18-.62 4.42-1.87 1.24-1.24 1.87-2.69 1.87-4.32 0-1.6-.61-3.08-1.82-4.42-1.21-1.35-2.7-2.02-4.48-2.02-1.71 0-3.15.68-4.35 2.05-1.26 1.26-1.89 2.73-1.89 4.4 0 1.64.61 3.08 1.84 4.32 1.24 1.24 2.7 1.86 4.41 1.86zM656.22 88.96h-15.5c0 1.26.07 3.1.2 5.5.14 2.4.2 3.93.2 4.58l.26 6.34c0 2.97-.81 4.71-2.43 5.22-1.62.51-5.99.77-13.12.77h-.46c0-6.96-1.81-13.03-5.42-18.21-3.62-5.18-8.85-7.78-15.7-7.78-5.9 0-10.98 2.11-15.24 6.34s-6.39 9.31-6.39 15.24c0 6.04 2.17 11.12 6.5 15.24 4.33 4.13 9.55 6.19 15.65 6.19-.75 1.06-4.48 3.73-11.2 8.03l-12.12 7.37 8.34 13.25 13.04-7.62c4.94-2.93 9.11-6 12.48-9.21 3.38-3.21 6.02-7.13 7.93-11.77h14.48c5.25 0 9.65-1.57 13.2-4.71 3.55-3.14 5.32-7.42 5.32-12.84V88.96zm-46.09 22.92h-6.65c-1.71 0-3.16-.63-4.37-1.89-1.21-1.26-1.82-2.69-1.82-4.3 0-1.57.62-2.97 1.87-4.22 1.24-1.24 2.69-1.87 4.32-1.87 2.22 0 4.01 1.13 5.37 3.38.58 1.06 1 2.09 1.25 3.09.26 1.01.38 2.12.38 3.35.01.65-.11 1.47-.35 2.46zM667.22 111.57l4.4 5.58c1.74 2.52 2.61 4.62 2.61 6.29 0 2.8-2.64 6.7-7.93 11.71l-10.69 9.31 10.08 11.97 10.08-8.54c2.15-1.91 4.05-3.77 5.7-5.58 1.65-1.81 3.5-4.17 5.55-7.08 2.05-2.92 3.07-6.44 3.07-10.56 0-7.3-3.39-15.28-10.18-23.94l-12.69 10.84zM754.6 142.67c0-1.64-.66-3.09-1.97-4.35-1.31-1.26-2.77-1.89-4.37-1.89-1.67 0-3.14.61-4.4 1.84-1.26 1.23-1.89 2.69-1.89 4.4 0 1.71.63 3.17 1.89 4.4 1.23 1.36 2.69 2.05 4.4 2.05 1.64 0 3.14-.63 4.5-1.89 1.22-1.37 1.84-2.89 1.84-4.56zM756.9 88.96c0 1.26.07 3.1.2 5.5.14 2.4.2 3.93.2 4.58l.26 6.34c0 2.97-.81 4.71-2.43 5.22-1.51.48-5.42.73-11.73.76-3-.02-4.51-.92-4.51-2.71 0-6.99-1.65-12.73-4.94-17.21-3.29-4.48-8.31-6.73-15.07-6.73-5.59 0-10.35 1.96-14.27 5.88s-5.88 8.68-5.88 14.27v23.58h15.81v-22.87c0-1.13.48-2.11 1.43-2.97.82-.92 1.81-1.38 2.97-1.38 2.25 0 3.68 2.34 4.3 7.01.58 6.31 2 11.25 4.25 14.83 2.12 3.37 6.96 5.15 14.53 5.35v.02h11.87c5.25 0 9.65-1.57 13.2-4.71 3.55-3.14 5.32-7.42 5.32-12.84V88.96H756.9zM756.29 148.61c-1.6 0-3.06.63-4.37 1.89-1.31 1.26-1.97 2.74-1.97 4.45 0 1.77.66 3.27 1.97 4.48 1.31 1.21 2.77 1.82 4.37 1.82 1.64 0 3.09-.61 4.37-1.82 1.28-1.21 1.92-2.7 1.92-4.48 0-1.71-.64-3.19-1.92-4.45-1.28-1.26-2.74-1.89-4.37-1.89zM764.37 136.28c-1.71 0-3.17.62-4.4 1.87-1.23 1.24-1.84 2.69-1.84 4.32 0 1.67.63 3.14 1.89 4.4 1.19 1.36 2.64 2.05 4.35 2.05 1.77 0 3.27-.67 4.48-2.02 1.21-1.35 1.82-2.82 1.82-4.43 0-1.64-.62-3.08-1.87-4.32-1.25-1.25-2.73-1.87-4.43-1.87z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="w-56 h-24">
                  <svg
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x={0}
                    y={0}
                    viewBox="0 0 1026.38 196.09"
                    style={{
                      enableBackground: 'new 0 0 1026.38 196.09',
                    }}
                    xmlSpace="preserve"
                  >
                    <style>{'.st2{fill:#fff}'}</style>
                    <path
                      className="st2"
                      d="M918.82 153.95c1.03-1.17.72-3.21.66-4.65-.05-1.3-.08-2.61-.08-3.92v-17.02c0-13.2.03-26.4.01-39.61 0-7.13.7-14.76-.22-21.83-1.28-9.78-9.84-17.32-17.6-22.45-6.02-3.99-12.72-6.86-19.59-9.04-3.39-1.07-6.82-1.96-10.28-2.77-3.23-.76-6.59-2-9.95-1.32-5.94 1.2-5.7 9.84-5.5 14.42.95 22.11.3 44.28.3 66.41 0 2.48-.05 4.96-.05 7.44 0 2.37-.05 4.65 1.76 6.45 1.96 1.96 4.56 2.34 7.18 2.64 9.7 1.1 19.08 4.45 27.6 9.17 4.34 2.4 8.47 5.17 12.35 8.27 1.97 1.57 3.8 3.3 5.73 4.92 1.67 1.4 4.41 4.68 6.92 3.48.31-.17.56-.36.76-.59zM926.01 153.95c-1.03-1.17-.72-3.21-.66-4.65.05-1.3.08-2.61.08-3.92v-17.02c0-13.2-.03-26.4-.01-39.61 0-7.13-.7-14.76.22-21.83 1.28-9.78 9.84-17.32 17.6-22.45 6.02-3.99 12.72-6.86 19.59-9.04 3.39-1.07 6.82-1.96 10.28-2.77 3.23-.76 6.59-2 9.95-1.32 5.94 1.2 5.7 9.84 5.5 14.42-.95 22.11-.3 44.28-.3 66.41 0 2.48.05 4.96.05 7.44 0 2.37.05 4.65-1.76 6.45-1.96 1.96-4.56 2.34-7.18 2.64-9.7 1.1-19.08 4.45-27.6 9.17-4.34 2.4-8.47 5.17-12.35 8.27-1.97 1.57-3.8 3.3-5.73 4.92-1.67 1.4-4.41 4.68-6.92 3.48-.31-.17-.56-.36-.76-.59z"
                    />
                    <linearGradient
                      id="SVGID_1_"
                      gradientUnits="userSpaceOnUse"
                      x1={908.032}
                      y1={116.168}
                      x2={837.237}
                      y2={116.168}
                    >
                      <stop
                        offset={0}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0,
                        }}
                      />
                      <stop
                        offset={1}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0.5,
                        }}
                      />
                    </linearGradient>
                    <path
                      d="M837.28 69.44c-.37 2.35.03 5.06.03 7.34v18.64c0 17.57-.21 35.15-.24 52.72v1.06c0 1.33 0 2.68.31 3.98.56 2.34 2.29 4.13 4.75 4.35 2.11.18 4.27-.34 6.35-.63 3.33 0 6.69-.99 10.05-1.08 3.53-.1 7.06.08 10.56.49 7 .82 13.89 2.58 20.48 5.1 2 .76 3.97 1.63 5.85 2.66 3.45 1.9 9.91 8.18 12.15 1.39.81-2.44.46-5.18.53-7.7.09-3.23.12-6.45.14-9.68.06-10.59-.11-21.17-.34-31.76-.15-6.89.04-13.84-.29-20.71-.19-4.02-1.62-7.27-4.76-9.82a98.036 98.036 0 0 0-40.49-19.69c-2.23-.5-4.49-.92-6.75-1.26-.98-.15-1.96-.28-2.95-.4-4.48-.53-12.84-2.18-14.95 3.39-.21.5-.34 1.04-.43 1.61z"
                      style={{
                        fill: 'url(#SVGID_1_)',
                      }}
                    />
                    <linearGradient
                      id="SVGID_00000000212834467657313510000004830302837719568568_"
                      gradientUnits="userSpaceOnUse"
                      x1={931.094}
                      y1={116.168}
                      x2={1002.277}
                      y2={116.168}
                    >
                      <stop
                        offset={0}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0,
                        }}
                      />
                      <stop
                        offset={1}
                        style={{
                          stopColor: '#26eff9',
                          stopOpacity: 0.5,
                        }}
                      />
                    </linearGradient>
                    <path
                      style={{
                        fill: 'url(#SVGID_00000000212834467657313510000004830302837719568568_)',
                      }}
                      d="M1002.06 69.44c.37 2.35-.03 5.06-.03 7.34v18.64c0 17.57.21 35.15.24 52.72v1.06c0 1.33 0 2.68-.31 3.98-.56 2.34-2.29 4.13-4.75 4.35-2.11.18-4.27-.34-6.35-.63-3.33 0-6.69-.99-10.05-1.08-3.53-.1-7.06.08-10.56.49-7 .82-13.89 2.58-20.48 5.1-2 .76-3.97 1.63-5.85 2.66-3.45 1.9-9.91 8.18-12.15 1.39-.81-2.44-.46-5.18-.53-7.7-.09-3.23-.12-6.45-.14-9.68-.06-10.59.11-21.17.34-31.76.15-6.89-.04-13.84.29-20.71.19-4.02 1.62-7.27 4.76-9.82a98.036 98.036 0 0 1 40.49-19.69c2.23-.5 4.49-.92 6.75-1.26.98-.15 1.96-.28 2.95-.4 4.48-.53 12.84-2.18 14.95 3.39.2.5.34 1.04.43 1.61z"
                    />
                    <path
                      className="st2"
                      d="M91.36 81.74c1.91 0 3.56-.68 4.96-2.05 1.4-1.36 2.1-3.02 2.1-4.96 0-1.88-.68-3.51-2.05-4.91-1.36-1.4-3.04-2.1-5.01-2.1-1.84 0-3.47.68-4.89 2.05-1.42 1.36-2.12 3.02-2.12 4.96s.68 3.6 2.05 4.96c1.36 1.37 3.02 2.05 4.96 2.05zM126.81 136.17c-1.77 0-3.24.67-4.4 2-1.26 1.26-1.89 2.8-1.89 4.6 0 1.64.62 3.08 1.87 4.32 1.24 1.24 2.72 1.87 4.42 1.87 1.67 0 3.15-.61 4.43-1.82 1.28-1.21 1.92-2.67 1.92-4.37 0-1.71-.62-3.23-1.87-4.58-1.25-1.34-2.74-2.02-4.48-2.02zM111.67 136.17c-1.71 0-3.2.63-4.48 1.89-1.28 1.26-1.92 2.83-1.92 4.71 0 1.71.67 3.15 2 4.35 1.23 1.23 2.69 1.84 4.4 1.84 1.7 0 3.19-.62 4.45-1.87 1.26-1.25 1.89-2.69 1.89-4.32 0-1.67-.63-3.21-1.89-4.6-1.4-1.33-2.88-2-4.45-2zM118.06 94.33c.14 2.32.2 3.82.2 4.5l.26 6.34c0 3.1-.84 4.91-2.51 5.42-1.59.49-6 .74-13.23.77-2.6-.01-3.9-1.34-3.9-3.99V88.96H83.33v18.62c0 2.52-1.36 3.79-4.09 3.79H57.39l-7.93 17.09h13.51c-.44 2.83-1.72 5.18-3.84 7.06-2.11 1.88-4.48 2.81-7.11 2.81-3.31 0-6.16-1.17-8.54-3.5-2.39-2.34-3.58-5.19-3.58-8.57 0-1.84.57-4.07 1.71-6.7 1.14-2.63 2.91-5.76 5.29-9.41l-13.25-8.24c-6.41 10.06-9.62 18.59-9.62 25.58 0 7.84 2.67 14.39 8.01 19.64s11.86 7.88 19.57 7.88c7.5 0 13.21-1.92 17.11-5.75 3.9-3.84 6.58-7.35 8.03-10.54 1.45-3.19 2.17-6.61 2.17-10.26h2.56v-.04c3.93-.19 7.16-1.46 9.67-3.85 1.36 1.26 3.02 2.23 4.96 2.89 1.66.57 3.54.88 5.63.96v.04h13.04c5.29 0 9.7-1.57 13.25-4.71 3.55-3.14 5.32-7.42 5.32-12.84V88.96h-15.5c.01 1.26.08 3.05.21 5.37zM240.28 89.32l-31.46-21.69-9.41 13.35 5.42 3.53c-5.76 0-10.75 2.11-14.96 6.32-4.21 4.21-6.32 9.17-6.32 14.86 0 1.13.05 2.09.15 2.89.1.8.32 1.73.67 2.79h-3.12c-3.31 0-5.49-1.13-6.55-3.38l-12.94-25.53-14.02 6.85 4.81 9.57c2.49 5.25 3.73 8.51 3.73 9.77 0 2.01-2.78 3.02-8.34 3.02l-4.35-.1-2.51-.2v17.09h13.25c4.67 0 8.46-1.3 11.36-3.89 1.47 1.26 3.13 2.23 4.99 2.89 1.86.67 3.84 1 5.96 1H228.76c5.73 0 10.71-2.08 14.94-6.24 4.23-4.16 6.34-9.21 6.34-15.14.01-7.28-3.25-13.19-9.76-17.76zm-30.6 19.95c-.89.85-1.69 1.42-2.4 1.69-.72.27-1.57.41-2.56.41-1.71 0-3.16-.62-4.37-1.87-1.21-1.24-1.82-2.69-1.82-4.32 0-1.71.6-3.17 1.79-4.4 1.13-1.26 2.59-1.89 4.4-1.89 1.7 0 3.18.61 4.43 1.82 1.24 1.21 1.87 2.7 1.87 4.48-.01 1.86-.45 3.22-1.34 4.08zm23.13.74c-.85.9-1.84 1.36-2.97 1.36h-5.32c.44-1.84.67-3.68.67-5.52 0-2.59-.43-5.25-1.28-7.98l8.8 6.19c.78.58 1.24 1.64 1.38 3.17 0 .95-.43 1.88-1.28 2.78zM313.22 135.66c-1.88 0-3.52.7-4.94 2.1-1.42 1.4-2.12 3.07-2.12 5.01 0 1.81.73 3.41 2.2 4.81 1.47 1.4 3.09 2.1 4.86 2.1 1.94 0 3.6-.7 4.96-2.1 1.36-1.4 2.05-3 2.05-4.81 0-1.94-.68-3.62-2.05-5.01-1.36-1.4-3.01-2.1-4.96-2.1zM308.08 94.46c.12 2.4.18 3.93.18 4.58l.31 6.34c0 2.97-.58 4.63-1.74 4.99-1.15.36-2.73.67-4.72.94-2.27-.22-3.42-1.1-3.42-2.65 0-6.99-1.65-12.73-4.94-17.21-3.29-4.48-8.31-6.73-15.07-6.73-5.59 0-10.35 1.96-14.27 5.88s-5.88 8.68-5.88 14.27v23.58h15.81v-22.87c0-1.13.48-2.11 1.43-2.97.82-.92 1.81-1.38 2.97-1.38 2.25 0 3.68 2.34 4.3 7.01.58 6.31 2 11.25 4.25 14.83 2.13 3.4 7.05 5.18 14.73 5.35v.02h2.81c5.25 0 9.66-1.57 13.22-4.71 3.56-3.14 5.35-7.42 5.35-12.84V88.96h-15.5c0 1.26.06 3.09.18 5.5zM397.27 82c1.91 0 3.56-.68 4.96-2.05 1.4-1.36 2.1-3.02 2.1-4.96 0-1.84-.7-3.47-2.1-4.89-1.4-1.42-3.05-2.12-4.96-2.12-1.91 0-3.58.71-5.01 2.12-1.43 1.42-2.15 3.04-2.15 4.89 0 1.94.7 3.63 2.1 5.06 1.46 1.3 3.15 1.95 5.06 1.95z"
                    />
                    <path
                      className="st2"
                      d="M391.67 94.46c.12 2.4.18 3.93.18 4.58l.31 6.34c0 2.97-.58 4.63-1.74 4.99-1.15.35-2.72.67-4.71.94-2.08-.26-3.12-1.44-3.12-3.52v-42.2h-15.4v45.32c0 5.63 1.82 9.96 5.45 12.99 3.4 2.84 7.73 4.33 12.97 4.52v.04h2.81c5.25 0 9.66-1.57 13.22-4.71 3.56-3.14 5.35-7.42 5.35-12.84V88.96h-15.5c0 1.26.06 3.09.18 5.5zM450.12 78.93c1.88 0 3.51-.7 4.91-2.1 1.4-1.4 2.1-3.04 2.1-4.91 0-1.98-.67-3.67-2.02-5.09s-3.01-2.12-4.99-2.12c-1.84 0-3.48.72-4.91 2.15-1.43 1.43-2.15 3.12-2.15 5.06 0 1.88.72 3.51 2.15 4.91 1.43 1.4 3.07 2.1 4.91 2.1z"
                    />
                    <path
                      className="st2"
                      d="m522.91 60.31-34.48 10.33-2.81 15.55 9.92 8.54c4.54 4.23 6.8 7.67 6.8 10.33 0 4.4-3.44 6.6-10.33 6.6l-4.5-.1-2.4-.13v-.07c-3.99 0-7.74-2.1-11.25-6.29l-8.44-11.82c-3.82-4.23-8.32-6.34-13.51-6.34-3.99 0-8.15 1.19-12.48 3.58l5.83 13.56c1.81-1.06 3.43-1.59 4.86-1.59 1.67 0 3.46 1.14 5.37 3.43l3.79 5.47h-22.25c-2.73 0-4.09-1.19-4.09-3.58v-42.2h-15.4v45.32c0 5.63 1.82 9.96 5.45 12.99 3.31 2.77 7.5 4.26 12.56 4.5v.05h61.18c6.07 0 11.27-2.19 15.6-6.57 4.33-4.38 6.5-9.59 6.5-15.63 0-4.54-1.03-8.31-3.09-11.33-2.06-3.02-3.97-5.52-5.73-7.52-1.76-2-3.73-4.03-5.91-6.11l23.12-6.7-4.31-14.27zM552.02 85.38c-5.9 0-10.97 2.11-15.22 6.34s-6.37 9.31-6.37 15.24c0 6.04 2.17 11.12 6.5 15.24 4.33 4.13 9.53 6.19 15.6 6.19-.92 1.43-8.68 6.56-23.28 15.4l8.34 13.25 17.09-10.33c6.07-3.99 10.76-8.42 14.07-13.3 3.31-4.88 4.96-10.91 4.96-18.11 0-7.95-1.74-14.92-5.22-20.92-3.48-6-8.97-9-16.47-9zm5.93 26.5h-6.65c-1.71 0-3.16-.63-4.37-1.89-1.21-1.26-1.82-2.69-1.82-4.3 0-1.57.61-2.97 1.84-4.22 1.23-1.24 2.68-1.87 4.35-1.87 2.18 0 3.96 1.13 5.32 3.38.58 1.06 1.01 2.09 1.28 3.09.27 1.01.41 2.12.41 3.35 0 .65-.12 1.47-.36 2.46zM636.22 80.47c1.6 0 3.06-.63 4.37-1.89 1.31-1.26 1.97-2.71 1.97-4.35 0-1.67-.61-3.19-1.84-4.55-1.36-1.26-2.86-1.89-4.5-1.89-1.71 0-3.17.68-4.4 2.05-1.26 1.23-1.89 2.69-1.89 4.4 0 1.71.63 3.17 1.89 4.4 1.26 1.21 2.73 1.83 4.4 1.83zM652.34 80.62c1.71 0 3.18-.62 4.42-1.87 1.24-1.24 1.87-2.69 1.87-4.32 0-1.6-.61-3.08-1.82-4.42-1.21-1.35-2.7-2.02-4.48-2.02-1.71 0-3.15.68-4.35 2.05-1.26 1.26-1.89 2.73-1.89 4.4 0 1.64.61 3.08 1.84 4.32 1.24 1.24 2.7 1.86 4.41 1.86zM656.22 88.96h-15.5c0 1.26.07 3.1.2 5.5.14 2.4.2 3.93.2 4.58l.26 6.34c0 2.97-.81 4.71-2.43 5.22-1.62.51-5.99.77-13.12.77h-.46c0-6.96-1.81-13.03-5.42-18.21-3.62-5.18-8.85-7.78-15.7-7.78-5.9 0-10.98 2.11-15.24 6.34s-6.39 9.31-6.39 15.24c0 6.04 2.17 11.12 6.5 15.24 4.33 4.13 9.55 6.19 15.65 6.19-.75 1.06-4.48 3.73-11.2 8.03l-12.12 7.37 8.34 13.25 13.04-7.62c4.94-2.93 9.11-6 12.48-9.21 3.38-3.21 6.02-7.13 7.93-11.77h14.48c5.25 0 9.65-1.57 13.2-4.71 3.55-3.14 5.32-7.42 5.32-12.84V88.96zm-46.09 22.92h-6.65c-1.71 0-3.16-.63-4.37-1.89-1.21-1.26-1.82-2.69-1.82-4.3 0-1.57.62-2.97 1.87-4.22 1.24-1.24 2.69-1.87 4.32-1.87 2.22 0 4.01 1.13 5.37 3.38.58 1.06 1 2.09 1.25 3.09.26 1.01.38 2.12.38 3.35.01.65-.11 1.47-.35 2.46zM667.22 111.57l4.4 5.58c1.74 2.52 2.61 4.62 2.61 6.29 0 2.8-2.64 6.7-7.93 11.71l-10.69 9.31 10.08 11.97 10.08-8.54c2.15-1.91 4.05-3.77 5.7-5.58 1.65-1.81 3.5-4.17 5.55-7.08 2.05-2.92 3.07-6.44 3.07-10.56 0-7.3-3.39-15.28-10.18-23.94l-12.69 10.84zM754.6 142.67c0-1.64-.66-3.09-1.97-4.35-1.31-1.26-2.77-1.89-4.37-1.89-1.67 0-3.14.61-4.4 1.84-1.26 1.23-1.89 2.69-1.89 4.4 0 1.71.63 3.17 1.89 4.4 1.23 1.36 2.69 2.05 4.4 2.05 1.64 0 3.14-.63 4.5-1.89 1.22-1.37 1.84-2.89 1.84-4.56zM756.9 88.96c0 1.26.07 3.1.2 5.5.14 2.4.2 3.93.2 4.58l.26 6.34c0 2.97-.81 4.71-2.43 5.22-1.51.48-5.42.73-11.73.76-3-.02-4.51-.92-4.51-2.71 0-6.99-1.65-12.73-4.94-17.21-3.29-4.48-8.31-6.73-15.07-6.73-5.59 0-10.35 1.96-14.27 5.88s-5.88 8.68-5.88 14.27v23.58h15.81v-22.87c0-1.13.48-2.11 1.43-2.97.82-.92 1.81-1.38 2.97-1.38 2.25 0 3.68 2.34 4.3 7.01.58 6.31 2 11.25 4.25 14.83 2.12 3.37 6.96 5.15 14.53 5.35v.02h11.87c5.25 0 9.65-1.57 13.2-4.71 3.55-3.14 5.32-7.42 5.32-12.84V88.96H756.9zM756.29 148.61c-1.6 0-3.06.63-4.37 1.89-1.31 1.26-1.97 2.74-1.97 4.45 0 1.77.66 3.27 1.97 4.48 1.31 1.21 2.77 1.82 4.37 1.82 1.64 0 3.09-.61 4.37-1.82 1.28-1.21 1.92-2.7 1.92-4.48 0-1.71-.64-3.19-1.92-4.45-1.28-1.26-2.74-1.89-4.37-1.89zM764.37 136.28c-1.71 0-3.17.62-4.4 1.87-1.23 1.24-1.84 2.69-1.84 4.32 0 1.67.63 3.14 1.89 4.4 1.19 1.36 2.64 2.05 4.35 2.05 1.77 0 3.27-.67 4.48-2.02 1.21-1.35 1.82-2.82 1.82-4.43 0-1.64-.62-3.08-1.87-4.32-1.25-1.25-2.73-1.87-4.43-1.87z"
                    />
                  </svg>
                </div>
              )
            ) : width > 767 ? (
              <div className="h-24 w-72">
                <svg
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  y={0}
                  viewBox="0 0 1026.38 196.09"
                  style={{
                    enableBackground: 'new 0 0 1026.38 196.09',
                  }}
                  xmlSpace="preserve"
                >
                  <style>{'.st2{fill:#fff}'}</style>
                  <path
                    className="st2"
                    d="M918.82 153.95c1.03-1.17.72-3.21.66-4.65-.05-1.3-.08-2.61-.08-3.92v-17.02c0-13.2.03-26.4.01-39.61 0-7.13.7-14.76-.22-21.83-1.28-9.78-9.84-17.32-17.6-22.45-6.02-3.99-12.72-6.86-19.59-9.04-3.39-1.07-6.82-1.96-10.28-2.77-3.23-.76-6.59-2-9.95-1.32-5.94 1.2-5.7 9.84-5.5 14.42.95 22.11.3 44.28.3 66.41 0 2.48-.05 4.96-.05 7.44 0 2.37-.05 4.65 1.76 6.45 1.96 1.96 4.56 2.34 7.18 2.64 9.7 1.1 19.08 4.45 27.6 9.17 4.34 2.4 8.47 5.17 12.35 8.27 1.97 1.57 3.8 3.3 5.73 4.92 1.67 1.4 4.41 4.68 6.92 3.48.31-.17.56-.36.76-.59zM926.01 153.95c-1.03-1.17-.72-3.21-.66-4.65.05-1.3.08-2.61.08-3.92v-17.02c0-13.2-.03-26.4-.01-39.61 0-7.13-.7-14.76.22-21.83 1.28-9.78 9.84-17.32 17.6-22.45 6.02-3.99 12.72-6.86 19.59-9.04 3.39-1.07 6.82-1.96 10.28-2.77 3.23-.76 6.59-2 9.95-1.32 5.94 1.2 5.7 9.84 5.5 14.42-.95 22.11-.3 44.28-.3 66.41 0 2.48.05 4.96.05 7.44 0 2.37.05 4.65-1.76 6.45-1.96 1.96-4.56 2.34-7.18 2.64-9.7 1.1-19.08 4.45-27.6 9.17-4.34 2.4-8.47 5.17-12.35 8.27-1.97 1.57-3.8 3.3-5.73 4.92-1.67 1.4-4.41 4.68-6.92 3.48-.31-.17-.56-.36-.76-.59z"
                  />
                  <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1={908.032}
                    y1={116.168}
                    x2={837.237}
                    y2={116.168}
                  >
                    <stop
                      offset={0}
                      style={{
                        stopColor: '#26eff9',
                        stopOpacity: 0,
                      }}
                    />
                    <stop
                      offset={1}
                      style={{
                        stopColor: '#26eff9',
                        stopOpacity: 0.5,
                      }}
                    />
                  </linearGradient>
                  <path
                    d="M837.28 69.44c-.37 2.35.03 5.06.03 7.34v18.64c0 17.57-.21 35.15-.24 52.72v1.06c0 1.33 0 2.68.31 3.98.56 2.34 2.29 4.13 4.75 4.35 2.11.18 4.27-.34 6.35-.63 3.33 0 6.69-.99 10.05-1.08 3.53-.1 7.06.08 10.56.49 7 .82 13.89 2.58 20.48 5.1 2 .76 3.97 1.63 5.85 2.66 3.45 1.9 9.91 8.18 12.15 1.39.81-2.44.46-5.18.53-7.7.09-3.23.12-6.45.14-9.68.06-10.59-.11-21.17-.34-31.76-.15-6.89.04-13.84-.29-20.71-.19-4.02-1.62-7.27-4.76-9.82a98.036 98.036 0 0 0-40.49-19.69c-2.23-.5-4.49-.92-6.75-1.26-.98-.15-1.96-.28-2.95-.4-4.48-.53-12.84-2.18-14.95 3.39-.21.5-.34 1.04-.43 1.61z"
                    style={{
                      fill: 'url(#SVGID_1_)',
                    }}
                  />
                  <linearGradient
                    id="SVGID_00000000212834467657313510000004830302837719568568_"
                    gradientUnits="userSpaceOnUse"
                    x1={931.094}
                    y1={116.168}
                    x2={1002.277}
                    y2={116.168}
                  >
                    <stop
                      offset={0}
                      style={{
                        stopColor: '#26eff9',
                        stopOpacity: 0,
                      }}
                    />
                    <stop
                      offset={1}
                      style={{
                        stopColor: '#26eff9',
                        stopOpacity: 0.5,
                      }}
                    />
                  </linearGradient>
                  <path
                    style={{
                      fill: 'url(#SVGID_00000000212834467657313510000004830302837719568568_)',
                    }}
                    d="M1002.06 69.44c.37 2.35-.03 5.06-.03 7.34v18.64c0 17.57.21 35.15.24 52.72v1.06c0 1.33 0 2.68-.31 3.98-.56 2.34-2.29 4.13-4.75 4.35-2.11.18-4.27-.34-6.35-.63-3.33 0-6.69-.99-10.05-1.08-3.53-.1-7.06.08-10.56.49-7 .82-13.89 2.58-20.48 5.1-2 .76-3.97 1.63-5.85 2.66-3.45 1.9-9.91 8.18-12.15 1.39-.81-2.44-.46-5.18-.53-7.7-.09-3.23-.12-6.45-.14-9.68-.06-10.59.11-21.17.34-31.76.15-6.89-.04-13.84.29-20.71.19-4.02 1.62-7.27 4.76-9.82a98.036 98.036 0 0 1 40.49-19.69c2.23-.5 4.49-.92 6.75-1.26.98-.15 1.96-.28 2.95-.4 4.48-.53 12.84-2.18 14.95 3.39.2.5.34 1.04.43 1.61z"
                  />
                </svg>
              </div>
            ) : (
              <div></div>
            )}
          </Link>
        </div>
        <div className={`${open && 'w-full'}`}>
          <a
            href=""
            className="flex flex-row-reverse items-center h-12 px-3 py-2 mx-5 text-white transition duration-150 cursor-pointer hover:bg-gray-800 rounded-xl"
          >
            {width > 767 ? (
              <RiTrophyLine className="text-2xl" />
            ) : (
              open && <RiTrophyLine className="text-2xl" />
            )}

            <span
              className={`${
                !open && 'hidden'
              } mr-3 text-base font-bold font-speda`}
            >
              باشترین
            </span>
          </a>

          <details className=" group" open>
            <summary className="flex flex-row-reverse items-center h-12 px-3 py-2 mx-5 text-white transition duration-150 cursor-pointer hover:bg-gray-800 rounded-xl">
              {width > 767 ? (
                <BiCategoryAlt className="text-2xl" />
              ) : (
                open && <BiCategoryAlt className="text-2xl" />
              )}

              <span
                className={`${
                  !open && 'hidden'
                } my-3 mr-3 origin-right duration-200 text-base font-bold font-speda`}
              >
                بابەت
              </span>

              <HiChevronDown
                className={`${
                  !open && 'hidden'
                } mr-auto transition duration-300 shrink-0 group-open:rotate-180`}
              />
            </summary>
            {filteredObject.map((category) => (
              <div key={category.id}>
                {category.categories.map((c, i) => (
                  <nav
                    key={i}
                    className={`${
                      !open && 'hidden'
                    } mt-1.5  ml-8 flex flex-col`}
                  >
                    <a
                      href=""
                      className="flex flex-row-reverse items-center px-3 py-2 mx-5 text-white transition duration-150 rounded-lg hover:bg-gray-800"
                    >
                      <Link href={`/category/${c.slug.current}`}>
                        <span className="ml-3 text-base font-bold font-speda">
                          {c.title}
                        </span>
                      </Link>
                    </a>
                  </nav>
                ))}
              </div>
            ))}
          </details>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;
