

const TitleHome = ({title, description}) => {
    return (
        <div className="text-center">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-5 m-2"  dangerouslySetInnerHTML={{ __html: description }}/>
      </div>
    );
};

export default TitleHome;