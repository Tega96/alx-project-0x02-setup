import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";


const Home = () => {
    return (
        <div>
            <Header />
            <Card 
                title="Benefits of sitting down to read"
                content="Sitting down to read has an enormous benefits than the mouth can tell. I will patiently tell you those quite soon."
            />
            <PostModal />
        </div>
    )
}
export default Home;