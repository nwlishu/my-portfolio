import data from "./data.json";
import Content from "@/components/content";
import Button from "@/components/button";

export default function BlogDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Filter data based on `id`
  const filterData = data.find((post) => post.id === id);

  if (!filterData) return <p className="p-16">Post not found</p>;

  return (
    <div className="p-16">
      <Button id={id} />
      <div className="p-4">
        <p className="text-4xl font-bold">{filterData.title}</p>
        <p className="text-xl">
          <i>{filterData.subtitle}</i>
        </p>
      </div>
      <Content {...filterData} />
    </div>
  );
}
