import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Danh mục</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">Không tìm thấy danh mục</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id}>
              <div className="flex flex-col items-center justify-center">
                <Image
                  key={collection._id}
                  src={collection.image}
                  alt={collection.title}
                  width={200}
                  height={200}
                  className="rounded-lg cursor-pointer"
                />
                <span className="font-semibold ">{collection.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
