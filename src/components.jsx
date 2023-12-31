import { useState } from "preact/hooks"


export const weights = [[5, [], []], [6.1, [1], []],[7.2, [1], [1]],[8.3, [2], [1]],[9.4, [2], [2]],[10.5, [2, 1], [2]],[11.6, [2, 1], [2, 1]],[12.7, [2, 2], [2, 1]],[13.8, [2, 2], [2, 2]],[14.9, [2, 2, 1], [2, 2]],[16.0, [2, 2, 1], [2, 2, 1]],[17.1, [2, 2, 2], [2, 2, 1]],[18.2, [2, 2, 2], [2, 2, 2]],[19.3, [2, 2, 2, 1], [2, 2, 2]],[20.4, [2, 2, 2, 1], [2, 2, 2, 1]],[22.9, [3], [2, 2, 2, 1]],[25.4, [3], [3]],[26.5, [3, 1], [3]],[27.6, [3, 1], [3, 1]],[28.7, [3, 2], [3, 1]],[29.8, [3, 2], [3, 2]],[30.9, [3, 2, 1], [3, 2]],[32.0, [3, 2, 1], [3, 2, 1]],[33.1, [3, 2, 2], [3, 2, 1]],[34.2, [3, 2, 2], [3, 2, 2]],[35.3, [3, 2, 2, 1], [3, 2, 2]],[36.4, [3, 2, 2, 1], [3, 2, 2, 1]],[37.5, [3, 2, 2, 2], [3, 2, 2, 1]],[38.6, [3, 2, 2, 2], [3, 2, 2, 2]],[39.7, [3, 2, 2, 2, 1], [3, 2, 2, 2]],[40.8, [3, 2, 2, 2, 1], [3, 2, 2, 2, 1]],[43.3, [3, 3], [3, 2, 2, 2, 1]],[45.8, [3, 3], [3, 3]],[46.9, [3, 3, 1], [3, 3]],[48.0, [3, 3, 1], [3, 3, 1]],[49.1, [3, 3, 2], [3, 3, 1]],[50.2, [3, 3, 2], [3, 3, 2]],[51.3, [3, 3, 2, 1], [3, 3, 2]],[52.4, [3, 3, 2, 1], [3, 3, 2, 1]],[53.5, [3, 3, 2, 2], [3, 3, 2, 1]],[54.6, [3, 3, 2, 2], [3, 3, 2, 2]],[55.7, [3, 3, 2, 2, 1], [3, 3, 2, 2]],[56.8, [3, 3, 2, 2, 1], [3, 3, 2, 2, 1]],[57.9, [3, 3, 2, 2, 2], [3, 3, 2, 2, 1]],[59.0, [3, 3, 2, 2, 2], [3, 3, 2, 2, 2]],[60.1, [3, 3, 2, 2, 2, 1], [3, 3, 2, 2, 2]],[61.2, [3, 3, 2, 2, 2, 1], [3, 3, 2, 2, 2, 1]],[63.7, [3, 3, 3], [3, 3, 2, 2, 2, 1]],[66.2, [3, 3, 3], [3, 3, 3]],[67.3, [3, 3, 3, 1], [3, 3, 3]],[68.4, [3, 3, 3, 1], [3, 3, 3, 1]],[69.5, [3, 3, 3, 2], [3, 3, 3, 1]],[70.6, [3, 3, 3, 2], [3, 3, 3, 2]],[71.7, [3, 3, 3, 2, 1], [3, 3, 3, 2]],[72.8, [3, 3, 3, 2, 1], [3, 3, 3, 2, 1]],[73.9, [3, 3, 3, 2, 2], [3, 3, 3, 2, 1]],[75.0, [3, 3, 3, 2, 2], [3, 3, 3, 2, 2]],[76.1, [3, 3, 3, 2, 2, 1], [3, 3, 3, 2, 2]],[77.2, [3, 3, 3, 2, 2, 1], [3, 3, 3, 2, 2, 1]],[78.3, [3, 3, 3, 2, 2, 2], [3, 3, 3, 2, 2, 1]],[79.4, [3, 3, 3, 2, 2, 2], [3, 3, 3, 2, 2, 2]],[80.5, [3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 2, 2, 2]],[81.6, [3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 2, 2, 2, 1]],[84.1, [3, 3, 3, 3], [3, 3, 3, 2, 2, 2, 1]],[86.6, [3, 3, 3, 3], [3, 3, 3, 3]],[87.7, [3, 3, 3, 3, 1], [3, 3, 3, 3]],[88.8, [3, 3, 3, 3, 1], [3, 3, 3, 3, 1]],[89.9, [3, 3, 3, 3, 2], [3, 3, 3, 3, 1]],[91.0, [3, 3, 3, 3, 2], [3, 3, 3, 3, 2]],[92.1, [3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 2]],[93.2, [3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 2, 1]],[94.3, [3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 2, 1]],[95.4, [3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 2, 2]],[96.5, [3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 2, 2]],[97.6, [3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 2, 2, 1]],[98.7, [3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 2, 2, 1]],[99.8, [3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 2, 2, 2]],[100.9, [3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 2, 2, 2]],[102.0, [3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 2, 2, 2, 1]],[104.5, [3, 3, 3, 3, 3], [3, 3, 3, 3, 2, 2, 2, 1]],[107.0, [3, 3, 3, 3, 3], [3, 3, 3, 3, 3]],[108.1, [3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3]],[109.2, [3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 1]],[110.3, [3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 1]],[111.4, [3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 2]],[112.5, [3, 3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 3, 2]],[113.6, [3, 3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 3, 2, 1]],[114.7, [3, 3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 3, 2, 1]],[115.8, [3, 3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 3, 2, 2]],[116.9, [3, 3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 3, 2, 2]],[118.0, [3, 3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 3, 2, 2, 1]],[119.1, [3, 3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 3, 2, 2, 1]],[120.2, [3, 3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 3, 2, 2, 2]],[121.3, [3, 3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 3, 2, 2, 2]],[122.4, [3, 3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 3, 2, 2, 2, 1]],[124.9, [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 2, 2, 2, 1]],[127.4, [3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3]],[128.5, [3, 3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 3]],[129.6, [3, 3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 3, 1]],[130.7, [3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 3, 1]],[131.8, [3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 3, 2]],[132.9, [3, 3, 3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 3, 3, 2]],[134.0, [3, 3, 3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 3, 3, 2, 1]],[135.1, [3, 3, 3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 3, 3, 2, 1]],[136.2, [3, 3, 3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 3, 3, 2, 2]],[137.3, [3, 3, 3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 3, 3, 2, 2]],[138.4, [3, 3, 3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 3, 3, 2, 2, 1]],[139.5, [3, 3, 3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 3, 3, 2, 2, 1]],[140.6, [3, 3, 3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 3, 3, 2, 2, 2]],[141.7, [3, 3, 3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 3, 3, 2, 2, 2]],[142.8, [3, 3, 3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 3, 3, 2, 2, 2, 1]],[145.3, [3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 2, 2, 2, 1]],[147.8, [3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3]],[148.9, [3, 3, 3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 3, 3]],[150.0, [3, 3, 3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 3, 3, 1]],[151.1, [3, 3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 3, 3, 1]],[152.2, [3, 3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 3, 3, 2]],[153.3, [3, 3, 3, 3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 3, 3, 3, 2]],[154.4, [3, 3, 3, 3, 3, 3, 3, 2, 1], [3, 3, 3, 3, 3, 3, 3, 2, 1]],[155.5, [3, 3, 3, 3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 3, 3, 3, 2, 1]],[156.6, [3, 3, 3, 3, 3, 3, 3, 2, 2], [3, 3, 3, 3, 3, 3, 3, 2, 2]],[157.7, [3, 3, 3, 3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 3, 3, 3, 2, 2]],[158.8, [3, 3, 3, 3, 3, 3, 3, 2, 2, 1], [3, 3, 3, 3, 3, 3, 3, 2, 2, 1]],[159.9, [3, 3, 3, 3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3, 2, 2, 1]],[161.0, [3, 3, 3, 3, 3, 3, 3, 2, 2, 2], [3, 3, 3, 3, 3, 3, 3, 2, 2, 2]],[162.1, [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 3, 3, 3, 2, 2, 2]],[163.2, [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1], [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]],[165.7, [3, 3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]],[168.2, [3, 3, 3, 3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3, 3, 3]],[169.3, [3, 3, 3, 3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 3, 3, 3]],[170.4, [3, 3, 3, 3, 3, 3, 3, 3, 1], [3, 3, 3, 3, 3, 3, 3, 3, 1]],[171.5, [3, 3, 3, 3, 3, 3, 3, 3, 2], [3, 3, 3, 3, 3, 3, 3, 3, 1]]]
export const weightVals = [5, 6.1, 7.2, 8.3, 9.4, 10.5, 11.6, 12.7, 13.8, 14.9, 16.0, 17.1, 18.2, 19.3, 20.4, 22.9, 25.4, 26.5, 27.6, 28.7, 29.8, 30.9, 32.0, 33.1, 34.2, 35.3, 36.4, 37.5, 38.6, 39.7, 40.8, 43.3, 45.8, 46.9, 48.0, 49.1, 50.2, 51.3, 52.4, 53.5, 54.6, 55.7, 56.8, 57.9, 59.0, 60.1, 61.2, 63.7, 66.2, 67.3, 68.4, 69.5, 70.6, 71.7, 72.8, 73.9, 75.0, 76.1, 77.2, 78.3, 79.4, 80.5, 81.6, 84.1, 86.6, 87.7, 88.8, 89.9, 91.0, 92.1, 93.2, 94.3, 95.4, 96.5, 97.6, 98.7, 99.8, 100.9, 102.0, 104.5, 107.0, 108.1, 109.2, 110.3, 111.4, 112.5, 113.6, 114.7, 115.8, 116.9, 118.0, 119.1, 120.2, 121.3, 122.4, 124.9, 127.4, 128.5, 129.6, 130.7, 131.8, 132.9, 134.0, 135.1, 136.2, 137.3, 138.4, 139.5, 140.6, 141.7, 142.8, 145.3, 147.8, 148.9, 150.0, 151.1, 152.2, 153.3, 154.4, 155.5, 156.6, 157.7, 158.8, 159.9, 161.0, 162.1, 163.2, 165.7, 168.2, 169.3, 170.4, 171.5]
const countInstancesOf = (arr, val) => {
    var count = 0;
    for (let i=0;i<arr.length;i++) {
        if (arr[i] === val) {
            count++
        }
    }
    return count
}

const list_to_obj = (arr) => {
    console.log(arr)
    return {
        weight: arr[0],        
        left: {
            small:countInstancesOf(arr[1], 1),
            medium: countInstancesOf(arr[1], 2),
            large: countInstancesOf(arr[1], 3)
        },
        right: {
            small:countInstancesOf(arr[2], 1),
            medium: countInstancesOf(arr[2], 2),
            large: countInstancesOf(arr[2], 3)
        }
        
    }
}


export const PlateArangement = ({weight_arr}) => {
    var count = 0;
    const smallPlate = (
      <div key={count} className="plate small-plate">
        <h1>S</h1>
      </div>
    )
    const mediumPlate = (
      <div key={count} className="plate medium-plate">
        <h1>M</h1>
      </div>
    )
  
    const largePlate = (
      <div key={count} className="plate large-plate">
        <h1>L</h1>
      </div>
    )
  
    const makeSides = (weight_obj) => {
      var side1 = weight_obj.left
      var side2 = weight_obj.right
      var renderLeft = []
      var renderRight = []
  
      const repeat = (val, n) => {
        var a = []
  
        for (var i=1;i<=n;i++) {
          a.push([val])
          count++;
        }
  
        return a
      }
      
      renderLeft.push(repeat(smallPlate, side1.small))
      renderLeft.push(repeat(mediumPlate, side1.medium))
      renderLeft.push(repeat(largePlate, side1.large))

      renderRight.push(repeat(smallPlate, side2.small))
      renderRight.push(repeat(mediumPlate, side2.medium))
      renderRight.push(repeat(largePlate, side2.large))

      return [renderLeft, renderRight.reverse()]
     
      }
      console.log(list_to_obj(weight_arr))
      var sides = makeSides(list_to_obj(weight_arr))

      return (
        <div className="plate-arangment">{sides[0]}<div className="vertical-seperator"></div>{sides[1]}</div>
      )
    
    } 


export const WeightPicker = ({onWeightChange}) => {
    const [weightPicked, setWeightPicked] = useState(5)
    return (<select value={weightPicked} onChange={e => {
        setWeightPicked(e.target.value)
        onWeightChange(weights[weightVals.indexOf(Number(e.target.value))])
        
    }
        } >
            {weightVals.map((val) => {
                return <option key={val.toString()} value={val}>{val}</option>
            })}
    </select>)
}

export const PhoneWebComponent = ({PhoneComponent, WebComponent}) => {

    return (
    <div>
        <div className="phone-component">{PhoneComponent}</div>
        <div className="web-component">{WebComponent}</div>
    </div>
  )
}

