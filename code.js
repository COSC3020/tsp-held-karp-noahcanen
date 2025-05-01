function tsp_hk(distance_matrix) {
    if (distance_matrix.length <= 1) return 0
    min_val = Infinity
    cities = []
    for (var i = 0; i < distance_matrix.length; i++) {cities.push(i)}
    for (var i = 0; i < distance_matrix.length; i++) {
        min_val = Math.min(min_val, tspPath(distance_matrix, i,cities,[]))
    }
    return min_val
}
function tspPath(graph, start, cities,memory){
    place = JSON.stringify(cities) + start
    if(memory[place] != null){return memory[place]}
    if(cities.length == 2){
        return memory[place] = graph[cities[0]][cities[1]]
    }
    min_val = Infinity
    let newCities = cities.filter(item => item != start); 
    for (var i = 0; i < cities.length; i++) {
        if (cities[i] != start){
        min_val = Math.min(min_val, (tspPath(graph, cities[i],newCities,memory) + graph[start][cities[i]]))
        }
    }
    memory[place] = min_val
    return min_val
}
