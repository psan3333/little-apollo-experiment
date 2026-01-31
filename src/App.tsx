import { gql, type TypedDocumentNode } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

type Review = {
    content: string;
    rating: number;
};

type ReviewQuery = {
    reviews: Review[];
};

type ReviewQueryVariables = Record<string, never>;

const GET_REVIEWS: TypedDocumentNode<ReviewQuery, ReviewQueryVariables> = gql`
    query GetReviews {
        reviews {
            content
            rating
        }
    }
`;

const App = () => {
    const { loading, error, data } = useQuery(GET_REVIEWS);

    if (loading) return "Loading...";
    if (error) return `Error: ${error.message}`;

    return (
        <div>
            {data?.reviews.map((review) => (
                <div>
                    <p>{review.content}</p>
                    <p>{review.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default App;
