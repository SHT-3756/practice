import Layout from "../components/MyLayout";

const Content = (props) => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </Layout>
);

export default (props) => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
