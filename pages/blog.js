import PageHeadMeta from "./page_head_meta";
import PageHeadParceiros from "./page_head_parceiros";
import Navbar from "./navbar";

export default function Blog() {
  return <>
  <PageHeadMeta></PageHeadMeta>
        
    <Navbar></Navbar>
    
  <div className="container-fluid">
  <PageHeadParceiros></PageHeadParceiros>

  <h1>Em construção</h1>
  </div>
  </>
}