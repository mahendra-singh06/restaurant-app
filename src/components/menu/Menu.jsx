import React  from "react";
import "../../App.css";
import "../../components/icons/feather.css";
import { Link } from "react-router-dom";
import ExtraModal from "../extraModal/ExtraModal";
import { ItemListData } from "../menu/MenuItemData";

function Menu() {
  const [openModal, setOPenModal] = React.useState(false);
  const [itemList, setItemList] = React.useState(ItemListData);

  console.log(itemList);

  return (
    <>
      {openModal && <ExtraModal closeModal={setOPenModal} />}
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-8 pt-3">
            <div className="shadow-sm rounded bg-white mb-3 overflow-hidden">
              <div className="d-flex item-aligns-center">
                <p className="font-weight-bold h6 p-3 border-bottom mb-0 w-100">
                  Menu
                </p>
                <Link
                  className="small text-primary font-weight-bold ml-auto"
                  to="#"
                >
                  View all <i className="feather-chevrons-right"></i>
                </Link>
              </div>
               {Object.values(itemList).map(item => 
                 <div className="row m-0">
                 <h6 className="p-3 m-0 bg-light w-100">
                   {item.label} <small className="text-black-50">{item.quantityLabel}</small>
                 </h6>
                 <div className="col-md-12 px-0 border-top">
                   <div className="">
                    {item.data.map(item_data => (
                       <div className="p-3 border-bottom gold-members">
                       <span className="float-right">
                         <Link
                           to="#"
                           className="btn btn-outline-secondary btn-sm"
                           data-toggle="modal"
                           data-target="#extras"
                           onClick={() => setOPenModal(true)}
                         >
                           ADD
                         </Link>
                       </span>
                       <div className="media">
                         <div className="mr-3 font-weight-bold text-danger non_veg">
                           .
                         </div>
                         <div className="media-body">
                           <h6 className="mb-1">{item_data.title}
                           <span class="badge badge-danger">BEST SELLER</span></h6>
                           <p className="text-muted mb-0">{item_data.price}</p>
                         </div>
                       </div>
                     </div> ))}
                   </div>
                 </div>
               </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
