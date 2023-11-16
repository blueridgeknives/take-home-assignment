import { useQuery, gql } from "@apollo/client"
import { useMemo } from "react"

const GET_PRODUCTS_IN_CATEGORY = gql`
    query getProductsInCategory($categoryId: String!, $pageSize: Int!) {
        products(
            filter: { category_id: { eq: $categoryId } }
            sort: { name: ASC }
            pageSize: $pageSize
            currentPage: 1
        ) {
            total_count
            items {
                id
                uid
                name
                url_rewrites {
                    url
                }
                small_image {
                    url
                    label
                }
                price_range {
                    minimum_price {
                        final_price {
                            value
                            currency
                        }
                    }
                    maximum_price {
                        final_price {
                            value
                            currency
                        }
                    }
                }
            }
        }
    }
`

export const useProductGrid = (props) => {
    /* This should return the data from the query above */
    return { }
}
