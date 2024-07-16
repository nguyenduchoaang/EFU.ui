import React, { useReducer } from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { DataCard, DataWordTable } from "../Data";
import TableCustom from "../../based/table/TableComponent";
import reducer, { initState } from "../reducer/PracticeReducer";
import { SET_MENU } from "../reducer/action";
import Confirm from "../../based/Confirm";
import { useNavigate } from "react-router-dom";

const HeaderTable = [
  "STT",
  "Từ vựng",
  "Nghĩa",
  "Loại từ vựng",
  "Ngày học",
  "Trạng thái",
  "Hành động",
];

export default function PracticeWord() {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const { selectedMenuItem, totalWord, rememberWord, knownWord } = state;
  const headerData = HeaderTable;
  const bodyData = DataWordTable;

  const _renderHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {headerData.map((item, index) => (
            <TableHead key={index}>{item}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
    );
  };

  const renderHeaderConfirm = () => {
    switch (selectedMenuItem) {
      case 1:
        return "Ôn tập lại tất cả các từ vựng";
      case 2:
        return "Ôn tập lại các từ vựng đã biết";
      case 3:
        return "Ôn tập lại các từ vựng đã nhớ";
      default:
        break;
    }
  };

  const renderBodyConfirm = () => {
    switch (selectedMenuItem) {
      case 1:
        return "Tiến hành ôn tập lại tất cả các từ vựng đã học ?";
      case 2:
        return "Tiến hành ôn tập lại các từ vựng đã biết ?";
      case 3:
        return "Tiến hành ôn tập lại các từ vựng đã nhớ ?";
      default:
        break;
    }
  };

  const _renderBodyTable = () => {
    const dataRender =
      selectedMenuItem === 1
        ? totalWord
        : selectedMenuItem === 2
        ? rememberWord
        : knownWord;
    return (
      <TableBody>
        {dataRender.map((item, index) => (
          <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
              <div className="font-medium">{item.word}</div>
              <div className="text-muted-foreground text-sm">
                {item.spelling}
              </div>
            </TableCell>

            <TableCell>{item.meaning}</TableCell>
            <TableCell>
              <Badge variant={item.type}>{item.type}</Badge>
            </TableCell>

            <TableCell>
              <time dateTime="2023-06-30">{item.date}</time>
            </TableCell>
            <TableCell>
              <Badge variant="outline">
                {item.status === 1 ? "Đã biết" : "Đã nhớ"}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="w-4 h-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="w-4 h-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <div>
      <div className="flex flex-col min-h-screen bg-muted/40">
        <main className=" grid gap-6 p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DataCard.map((item) => (
              <Card
                style={{
                  backgroundColor: item.color,
                  cursor: item.cursor,
                }}
                onClick={() => {
                  if (item.id !== 4) {
                    dispatch(SET_MENU(item.id));
                  }
                }}
                className={`${item.color}  `}
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <div className="text-4xl font-bold">{item.total}</div>
                  {item.icon}
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Tổng quan từ vựng</h2>
            <div className="flex items-center gap-2">
              <Confirm
                header={renderHeaderConfirm()}
                content={renderBodyConfirm()}
                nameShow="Ôn tập"
                colorBtn="success"
                nameBtn="Đi thôi !"
                item={selectedMenuItem}
                handleSave={(item) => {
                  navigate(`/practice/exam-word/${item}`);
                }}
              ></Confirm>

              <Button variant="outline" size="sm">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
          <TableCustom
            renderHeader={_renderHeader}
            renderBody={_renderBodyTable}
            length={bodyData.length}
            itemsPerPage={10}
          />
          <Table></Table>
        </div>
      </div>
    </div>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
