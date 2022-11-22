interface Mapper<T, K> {
  toDto: (data: T) => K;
}

export { Mapper };
