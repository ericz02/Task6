function BookInfo({ book }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-2xl font-bold mb-8">{book.title}</h1>
            <div className="flex">
                <img
                src={book.imageURL}
                alt={book.title}
                className="w-64 h-96 object-contain float-left mr-4 mb-9"
                />

                <div>
                    <h2 className="text-lg font-bold text-blue-900 mb-9">
                    Author: {book.author}
                    </h2>
                    <p className="text-cyan-600 mb-9 font-bold">Publisher: {book.publisher}</p>
                    <p className="text-cyan-600 mb-9 font-bold">Year: {book.year}</p>
                    <p className="text-cyan-600 mb-9 font-bold">Pages: {book.pages}</p>
                    <p className="text-cyan-600 mb-9 font-bold">Country: {book.country}</p>
                </div>
            </div>
        </div>
    );
  }
  
  export default BookInfo;