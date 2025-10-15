
class Category:
    def __init__(self, uuid: str, name: str, emoji: str):
        self.uuid = uuid
        self.name = name
        self.emoji = emoji

    def to_dict(self): 
        return {
            "uuid": self.uuid,
            "name": self.name,
            "emoji": self.emoji
        }
    
