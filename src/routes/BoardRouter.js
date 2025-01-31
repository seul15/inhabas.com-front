import Board from "@/board/pages/Board";
import BoardRegister from "@/board/pages/BoardRegister";
import BoardDetail from "@/board/pages/BoardDetail";
import ContestBoard from "@/board/pages/ContestBoard";
import ContestRegister from "@/board/pages/ContestRegister";
import ContestDetail from "@/board/pages/ContestDetail";

const boardRouter =[
    {
        path: "/board/1",
        component: Board,
        // 게시판
    },
    {
        path: "/board/2",
        component: Board,
        // 게시판
    },
    {
        path: "/board/3",
        component: Board,
        // 게시판
    },
    {
        path: "/board/contest",
        component: Board,
        // 게시판
    },
    {
        path: "/activity",
        component: Board,
        // 게시판
    },
    {
        path: "/contestBoard",
        component: ContestBoard
        // 공모전 게시판
    },
    {
        path: "/board/detail/:id",
        component: BoardDetail
        // 게시판 / 공모전 게시판 detail
    },
    {
        path: "/board/register",
        component: BoardRegister
        // 게시판 등록
    },
    {
        path: "/contestBoard/register",
        component: ContestRegister
        // 공모전 게시판 등록
    },
    {
        path: "/contestBoard/detail",
        component: ContestDetail
        // 공모전 게시판 detail
    },
]


export default boardRouter;