from ninja import NinjaAPI

api = NinjaAPI()


@api.get("/yellow")
def hello(request):
    return "Yellow world"
