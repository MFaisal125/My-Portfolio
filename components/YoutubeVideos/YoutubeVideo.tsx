import VideoGrid from './VideoGrid';
import SectionHeading from '../SectionHeading';

export default function YoutubeVideos() {
  return (
    <div className="px-8">
      <SectionHeading
        heading="Watched by Thousands of People"
        subheading="Our Projects:Design, AI, Web3, SaaS, Startups, Algo Trading, Reactjs, Nextjs"
      />
      <VideoGrid />
    </div>
  );
}
