import hero0 from '@/assets/hero0.asset.json';
import hero1 from '@/assets/hero1.asset.json';
import hero2 from '@/assets/hero2.asset.json';
import p0 from '@/assets/poster0.asset.json';
import p1 from '@/assets/poster1.asset.json';
import p2 from '@/assets/poster2.asset.json';
import p3 from '@/assets/poster3.asset.json';
import p4 from '@/assets/poster4.asset.json';
import p5 from '@/assets/poster5.asset.json';
import p6 from '@/assets/poster6.asset.json';
import p7 from '@/assets/poster7.asset.json';
import p8 from '@/assets/poster8.asset.json';
import p9 from '@/assets/poster9.asset.json';
import p10 from '@/assets/poster10.asset.json';
import p11 from '@/assets/poster11.asset.json';
import n0 from '@/assets/network0.asset.json';
import n1 from '@/assets/network1.asset.json';
import n2 from '@/assets/network2.asset.json';
import n3 from '@/assets/network3.asset.json';
import n4 from '@/assets/network4.asset.json';
import n5 from '@/assets/network5.asset.json';
import n6 from '@/assets/network6.asset.json';
import n7 from '@/assets/network7.asset.json';

export interface Movie { id: string; title: string; image: string; year: string; type: string; genre: string; network: string; rating: string; description: string; }
export const featured: Movie[] = [
  {id:'jackpot',title:'The Ordinary Jackpot',image:hero0.url,year:'2026',type:'Series',genre:'Drama',network:'K-drama',rating:'8.2',description:'An ordinary office worker wins the lottery — the amount isn’t enough for him to quit his job, but it’s enough to give him a new outlook on life.'},
  {id:'shinchan',title:'Shinchan',image:hero1.url,year:'1992',type:'Series',genre:'Animation',network:'Jio Hotstar',rating:'8.4',description:'A little boy. A big imagination. Join Shin-chan and his family for everyday adventures that are anything but ordinary.'},
  {id:'mummy',title:'The Mummy: Tomb of the Dragon Emperor',image:hero2.url,year:'2008',type:'Movie',genre:'Adventure',network:'Amazon Prime',rating:'5.5',description:'Rick O’Connell travels to China, where an ancient emperor rises from the dead with an army and a thirst for world domination.'},
];
const titles=['The Boys','Spider-Man: Brand New Day','Doraemon: Undersea Devil','Drishyam: The Conclusion','Resident Evil','Dhurandhar: The Revenge','Mirzapur: The Movie','Toxic: A Fairy Tale for Grown-ups','Demon Slayer: Infinity Castle','Pritam and Pedro','Satluj','FROM'];
const posters=[p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11];
export const movies: Movie[]=posters.map((p,i)=>({id:`movie-${i}`,title:titles[i]??'Untitled',image:p.url,year:i===8?'2025':'2026',type:i===0||i>8?'Series':'Movie',genre:['Action','Adventure','Animation','Thriller','Horror','Action','Crime','Thriller','Animation','Comedy','Drama','Horror'][i]??'Drama',network:['Amazon Prime','Netflix','Jio Hotstar','Netflix','Netflix','Jio OTT','Amazon Prime','Zee 5','Netflix','MX Player','Sony Liv','Amazon Prime'][i]??'Netflix',rating:['8.7','8.1','7.9','8.5','7.2','8.3','8.6','7.8','8.9','7.1','7.6','8.2'][i]??'8.0',description:'Discover the story, the characters, and the moments that make this title worth adding to your list.'}));
export const networks=[n0,n1,n2,n3,n4,n5,n6,n7].map((n,i)=>({image:n.url,name:['Amazon Prime','Jio Hotstar','Jio OTT','K-drama','MX Player','Netflix','Sony Liv','Zee 5'][i]??''}));