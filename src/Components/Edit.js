import Supply from "./Supply";

export function Edit() {
  useEffect(() => {
    axios.get(`http://localhost:3003/supply/${id}`).then((response) => {
      setSupply(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setSupply({ ...Supply, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3003/supply/${id}`, supply)
      .then((response) => {
        navigate(`/supply/${id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
