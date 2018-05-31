import React from 'react'

export default function CoinTable(props){
    
    const createTableTd = () => 
        { 
            const coinTitle = props.data.map(row => row.CoinName);
            const coinImageUrl = props.data.map(row => row.ImageUrl);

            let table = []
            for (let i = 0; i < 1; i++){
                let children = [];
                for (let j = 0; j <= 20; j++){
                    children.push
                    (<tr>
                        <td>{`${j}`}</td>
                        <td><img src={"https://www.cryptocompare.com" + coinImageUrl[j]}/></td>
                        <td>{coinTitle[j]}</td>
                    </tr>
                    )
                }
            table.push(children)
            }
            return table
        }
    return(
        <div>
            <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Logo</th> 
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {createTableTd()}
            </tbody>
        </table>
        </div>
    )
}



/*Object.getOwnPropertyNames(json[0])

Object.getOwnPropertyNames(props.data[0])

*/