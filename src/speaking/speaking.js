import { useState, useReducer, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useToast } from '../components/ui/use-toast';
import { DataMenuSpeaking } from './Data';
import reducer, { initStates } from './reducer/reducer';
import { SET_MENU, SET_PLAYLIST } from './reducer/action';
import { PlayList } from '../based/PlayList';
import { IPAPage } from '../based/IPAPage';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { HeaderIcon } from '../based/icon/configIcon';
import SpeechToText from '../based/SpeechToText';
import ToolTip from '../based/ToolTip';

const listButton = [
   {
      id: 1,
      name: 'Flash Card',
   },
   {
      id: 2,
      name: 'Nói thử',
   },
];

export default function Speaking() {
   const [state, dispatch] = useReducer(reducer, initStates);
   const { toast } = useToast();
   const [selectedButton, setSelectedButton] = useState(1);
   const { playList } = state;
   const [play, setPlay] = useState({
      isPlay: false,
      playUrl: '',
      description: '',
   });

   useEffect(() => {}, []);

   const handleGetPlayList = () => {
      const list = [
         {
            id: 1,
            name: 'Các đoạn hội thoại thông dụng',
            description: 'Nghe các đoạn hội thoại thông dụng',
            videos: [
               {
                  id: 1,
                  name: '1000 cụm từ tiếng anh phổ biến',
                  url: 'https://www.youtube.com/embed/0qMPdAId8TM?si=AYYhBxjzOnCcyey-',
                  description:
                     'Đây là 1000 cụm từ tiếng anh phổ biến, giúp bạn có vốn từ cơ bản để giao tiếp tiếng anh',
                  time: '15p',
               },
               {
                  id: 2,
                  name: '5000 từ tiếng anh Oxford',
                  url: 'https://www.youtube.com/embed/VDb_JA7Xn4M?si=muWHFCZDYo4I0lgs',
                  time: '11h',
               },
            ],
         },
         {
            id: 2,
            name: 'Các câu hỏi phỏng vấn',
            description: 'Nghe các câu hỏi phỏng vấn',
            videos: [],
         },
      ];
      return list;
   };

   // xử lý khi chọn menu
   useEffect(() => {
      switch (state.menuSelected) {
         case 1:
            dispatch(SET_PLAYLIST(handleGetPlayList()));
            break;
         default:
            break;
      }
   }, [state.menuSelected]);

   // render nội dung của body (sau khi chon menu)
   const renderBody = (numberMenu) => {
      switch (numberMenu) {
         case 1:
            return (
               <PlayList
                  playList={playList}
                  handlePlay={(item) => {
                     console.log(item);
                     setPlay({
                        isPlay: true,
                        playUrl: item.url,
                        description: item.description,
                     });
                  }}
               />
            );
         case 2:
            return <IPAPage />;
         default:
            break;
      }
   };

   return (
      <WordWrapper className="flex  min-h-screen max-md:flex-col   w-full bg-background">
         <aside className="  md:flex md:flex-col max-md:w-full  w-1/4 border-r bg-background  gap-6 hidden">
            <div class="px-3 py-2">
               {DataMenuSpeaking.map((item, index) => {
                  return (
                     <>
                        <div className="mb-8">
                           <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight ">{item.title}</h2>
                           {item.menu.map((subItem, subIndex) => {
                              return (
                                 <>
                                    <button
                                       class={`inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start 
                            ${
                               subItem.id === state.menuSelected
                                  ? 'bg-accent text-accent-foreground'
                                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                            }
                            `}
                                       fdprocessedid="rfp2gh"
                                       onClick={() => {
                                          setPlay({
                                             isPlay: false,
                                             playUrl: '',
                                             description: '',
                                          });
                                          dispatch(SET_MENU(subItem.id));
                                       }}
                                    >
                                       {subItem.icon}
                                       {subItem.title}
                                    </button>
                                 </>
                              );
                           })}
                        </div>
                     </>
                  );
               })}
            </div>
         </aside>
         <div className="body flex flex-col w-full h-full">
            {play.isPlay && (
               <iframe
                  width="60%"
                  height="400px"
                  src={play.playUrl}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
               ></iframe>
            )}
            <div className="flex play_speaking w-[100%] h-[40%] ">
               <iframe
                  width="60%"
                  height="500px"
                  src="https://www.youtube.com/embed/0qMPdAId8TM?si=d5UFMcgVkplNFNxP"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
               ></iframe>
               <div className="w-[40%] px-5 flex flex-col ">
                  {/* <strong>{play.description}Học 1000 từ vựng sẽ giúp bạn nhớ lâu hơn</strong> */}
                  <div className="flex justify-evenly my-5">
                     {listButton.map((item) => {
                        return (
                           <Button
                              variant="outline"
                              className={`w-[100px] ${
                                 selectedButton === item.id ? 'bg-accent text-accent-foreground' : ''
                              }`}
                              onClick={() => setSelectedButton(item.id)}
                           >
                              {item.name}
                           </Button>
                        );
                     })}
                  </div>
                  {selectedButton === 1 ? (
                     <>
                        <p className="mb-5">
                           <strong>Note:</strong> Tính năng Flash Card giúp bạn lưu lại những nội dung cần ghi nhớ, có
                           thể ôn tập lại hằng ngày
                        </p>
                        <Textarea className="mb-5" placeholder="Ghi nội dung mà bạn muốn ghi nhớ" />
                        <Button className="w-[100px] ">Thêm </Button>
                     </>
                  ) : (
                     <>
                        <p className="mb-5">
                           <strong>Note:</strong> Tính năng Nói Thử giúp bạn luyện nói những câu / từ trực tiếp, từ đó
                           cải thiện khả năng phát âm của bạn
                           <ToolTip content="Nói thử" />
                        </p>
                        <SpeechToText />
                     </>
                  )}
               </div>
            </div>
            {renderBody(state.menuSelected)}
         </div>
      </WordWrapper>
   );
}

const WordWrapper = styled.div`
   .button_action {
      border-radius: ${(props) => props.border};
   }
`;
