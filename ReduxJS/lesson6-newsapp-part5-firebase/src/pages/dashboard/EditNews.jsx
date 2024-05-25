import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import slugify from "slugify";
import NewsForm from "../../components/NewsForm";
import { editNewsFromDatabase } from "../../tools/actions/newsActions";
import swal from "sweetalert";

const EditNews = () => {
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const {slug} = useParams();
        const data = useSelector(p=>p);
        const fltrdata = data.find(p=>slugify(p.title) === slug);

  return (
    <div>
      <h1 className='text-center my-5'>Edit News</h1>
      <NewsForm editdata={fltrdata} formData={fd => {
        dispatch(editNewsFromDatabase(fltrdata.id,fd));
        swal("News edited", "", "success")
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500)
      }} />
    </div>
  )
}

export default EditNews