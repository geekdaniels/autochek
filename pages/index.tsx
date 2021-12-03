import millify from "millify";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { GetPopularBrands, MakeList, GetCars, Result } from "../types";
import { useRouter } from "next/dist/client/router";

const Home: NextPage<{ brands: MakeList[]; page: number; cars: Result[] }> = ({
  brands,
  page,
  cars
}) => {
  const router = useRouter();
  const pageNumClick = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: { page: page }
    });
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mt-4">
        <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
          <span>O</span>ur <span>P</span>opular <span>B</span>rands
        </h3>
        {/* <div className="content">
          {brands.map((brand, index) => (
            <a href="/ng/cars-for-sale?body_type_id=9" key={index}>
              <div className="body-type">
                <span className="icon">
                  <Image
                    loading="lazy"
                    src={brand.imageUrl}
                    width="60"
                    height="40"
                    alt={brand.name}
                  />
                </span>
                <span className="name">{brand.name}</span>
              </div>
            </a>
          ))}
        </div> */}
      </div>

      <div className="ads-grid py-sm-5 py-4">
        <div className="container py-xl-4 py-lg-2">
          <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
            <span>O</span>ur <span>C</span>ars
          </h3>

          <div className="row justify-content-center">
            <div className="agileinfo-ads-display col-lg-12">
              <div className="wrapper">
                <div className="product-sec1 px-sm-4 px-3 py-sm-5  py-3 mb-4">
                  {/* <h3 className="heading-tittle text-center font-italic">
                    New Brand Mobiles
                  </h3> */}
                  <div className="row">
                    {cars.map((car, index) => (
                      <div className="col-md-4 product-men mt-5" key={index}>
                        <div className="men-pro-item simpleCart_shelfItem">
                          <div className="men-thumb-item text-center">
                            <Image
                              src={car.imageUrl}
                              alt={car.title}
                              className="img-fluid"
                              width="500"
                              height="400"
                            />
                            <div className="men-cart-pro">
                              <div className="inner-men-cart-pro">
                                <Link href={`/cars/${car.id}`}>
                                  <a className="link-product-add-cart">
                                    Quick View
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="item-info-product text-center border-top mt-4">
                            <h4 className="pt-1">
                              <a href="single.html">{car.title}</a>
                            </h4>
                            <div className="info-product-price my-2">
                              <span className="item_price">
                                ₦{millify(car.marketplacePrice)}
                              </span>
                              <del>₦{millify(car.marketplaceOldPrice)}</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <button
                        className="page-link"
                        onClick={() => pageNumClick(Number(page) - 1)}
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </button>
                    </li>

                    <li className="page-item">
                      <button
                        className="page-link"
                        aria-label="Next"
                        onClick={() => pageNumClick(Number(page) + 1)}
                      >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const page = query.page || 1;

  // Fetch data from external API
  // const res = await fetch(
  //   `https://api.staging.myautochek.com/v1/inventory/make?popular=true`
  // );
  // const { makeList }: GetPopularBrands = await res.json();

  const carList = await fetch(
    `https://api-prod.autochek.africa/v1/inventory/car/search?page_number=${page}&page_size=20`
  );
  const { result }: GetCars = await carList.json();

  return {
    props: {
      // brands: makeList,
      cars: result,
      page: page
    }
  };
}

export default Home;
