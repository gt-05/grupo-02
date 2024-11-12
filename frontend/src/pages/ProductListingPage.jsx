import Section from "../components/Section.jsx";

import Layout from "../components/Layout.jsx";

import ProductCheckBox from "../components/ProductCheckBox.jsx";

export default function ProductListingPage() {
  return (
    <>

      <Layout className="flex min-h-screen">
          <Section>
              <ProductCheckBox />
          </Section>
      </Layout>
    </>
  )
}