
// 定義類型
type Branded<K, T> = K & { __brand: T }
type ProductId = Branded<string, "ProductId">
type UserId = Branded<string, "UserId">
// type ProductId = string & { readonly __brand: unique symbol };
// type UserId = string & { readonly __brand: unique symbol };

// 設定工廠
function createProductId(id: string): ProductId {
  return id as ProductId;
}

function createUserId(id: string): UserId {
  return id as UserId;
}

// 生成特定ID格式

function generateUniqueId(): string {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

const productId: ProductId = createProductId(generateUniqueId());
const userId: UserId = createUserId(generateUniqueId());

console.log(productId);
console.log(userId);



